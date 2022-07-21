import { Component, ElementRef, OnInit, ViewChildren } from "@angular/core";
import { EmailApiService } from "../services/email-api.service";
import { ToastrService } from "ngx-toastr";
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable, fromEvent, merge } from "rxjs";
import { debounceTime } from "rxjs/operators";
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formControls!: ElementRef[];
  userForm: FormGroup;
  private validationMessages: {
    [key: string]: { [key: string]: string | { [key: string]: string } };
  };
  isLoading = false;
  message: { [key: string]: string } = {};
  typeSelected: string;

  constructor(
    private emailapiservice: EmailApiService,
    private toastrService: ToastrService,
    private fb: FormBuilder
  ) {
    this.typeSelected = "ball-fussion";
    this.validationMessages = {
      name: {
        required: "Please enter your name",
      },
      email: {
        required: "Please enter your Email",
        email: "Please enter a valid email",
      },
      phone: {
        required: "Please enter your phone number",
      },
      subject: {
        required: "Please enter your subject",
      },
      descmessage: {
        required: "Please enter your message",
      },
    };
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      subject: ["", Validators.required],
      descmessage: ["", Validators.required],
      receiver: [false],
    });
  }

  ngOnInit(): void {}

  register() {
    this.isLoading = true;
    let { value } = this.userForm;
    value.receiver = false;
    this.emailapiservice
      .sendEmail("https://sendmail.goolrant.com/sendmail", value)
      .subscribe(
        (data: any) => {
          let res: any = data;
          console.log(
            `👏 > 👏 > 👏 > 👏 ${value.firstName} is successfully register and mail has been sent and the message id is ${res.messageId}`
          );
          value.receiver = true;
          this.emailapiservice
            .sendEmail("https://sendmail.goolrant.com/sendmail", value)
            .subscribe(
              (response: any) => {
                console.log(
                  `👏 > 👏 > 👏 > 👏 ${value.firstName} is successfully register and mail has been sent and the message id is ${response.messageId}`
                );
                this.toastrService.success(
                  "Email Sent",
                  "Please check your mail for further details"
                );
                this.resetForm();
                this.isLoading = false;
              },
              (err) => {
                this.toastrService.error(
                  "Email Sent Error!",
                  "Some Internal error occured"
                );
                this.resetForm();
                this.isLoading = false;
              }
            );
        },
        (err) => {
          console.log(err);
          this.toastrService.error(
            "Email Sent Error!",
            "Some Internal error occured"
          );
          this.resetForm();
          this.isLoading = false;
        },
        () => {
          this.resetForm();
          this.isLoading = false;
        }
      );
  }

  resetForm() {
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", Validators.required],
      subject: ["", Validators.required],
      descmessage: ["", Validators.required],
      receiver: [false],
    });
    this.isLoading = false;
  }

  ngAfterViewInit(): void {
    const addBlurs: Observable<any>[] = this.formControls.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, "blur")
    );
    merge(this.userForm.valueChanges, ...addBlurs)
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.message = this.invalidInputs(this.userForm);
      });
  }
  invalidInputs(formgroup: FormGroup): { [key: string]: string } {
    let messages: any = {};
    for (const input in formgroup.controls) {
      const key = formgroup.controls[input];
      if (key instanceof FormGroup) {
        const nestedGroupMessages = this.invalidInputs(key);
        Object.assign(messages, nestedGroupMessages);
      } else {
        if (this.validationMessages[input]) {
          messages[input] = "";
          if (key.errors && (key.dirty || key.touched)) {
            Object.keys(key.errors).map((messageKey) => {
              if (this.validationMessages[input][messageKey]) {
                messages[input] = this.validationMessages[input][messageKey];
              }
            });
          }
        }
      }
    }
    return messages;
  }
}

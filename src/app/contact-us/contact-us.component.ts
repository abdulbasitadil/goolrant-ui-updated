import { Component, OnInit } from '@angular/core';
interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  services: Service[] = [
    {value: 'cloud', viewValue: 'Cloud Services'},
    {value: 'cloud', viewValue: 'Cloud Services'},
    {value: 'cloud', viewValue: 'Cloud Services'},
    {value: 'cloud', viewValue: 'Cloud Services'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

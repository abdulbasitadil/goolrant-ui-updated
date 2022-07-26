import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-lets-connect",
  templateUrl: "./lets-connect.component.html",
  styleUrls: ["./lets-connect.component.scss"],
})
export class LetsConnectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  contact() {
    this.router.navigate(["/contact-us"]);
  }
}

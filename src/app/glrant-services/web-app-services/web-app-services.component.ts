import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-web-app-services",
  templateUrl: "./web-app-services.component.html",
  styleUrls: ["./web-app-services.component.scss"],
})
export class WebAppServicesComponent implements OnInit {

  url: any;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.url = this.router.url;
  }
}

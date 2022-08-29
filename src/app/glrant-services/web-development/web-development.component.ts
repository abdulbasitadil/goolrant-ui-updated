import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent implements OnInit {

  url: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.url = this.router.url;
  }

}

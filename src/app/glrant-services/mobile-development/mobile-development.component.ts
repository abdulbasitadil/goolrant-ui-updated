import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-development',
  templateUrl: './mobile-development.component.html',
  styleUrls: ['./mobile-development.component.scss']
})
export class MobileDevelopmentComponent implements OnInit {

  url: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.url = this.router.url;
  }

}

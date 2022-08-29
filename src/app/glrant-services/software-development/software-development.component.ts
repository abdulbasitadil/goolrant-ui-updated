import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.scss']
})
export class SoftwareDevelopmentComponent implements OnInit {

  url: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.url = this.router.url;
  }

}

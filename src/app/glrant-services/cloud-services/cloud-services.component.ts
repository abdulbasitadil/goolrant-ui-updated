import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cloud-services',
  templateUrl: './cloud-services.component.html',
  styleUrls: ['./cloud-services.component.scss']
})
export class CloudServicesComponent implements OnInit {

  url: any = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.url = this.router.url;
  }

}

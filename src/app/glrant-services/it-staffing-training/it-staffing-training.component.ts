import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-it-staffing-training',
  templateUrl: './it-staffing-training.component.html',
  styleUrls: ['./it-staffing-training.component.scss']
})
export class ItStaffingTrainingComponent implements OnInit {

  url: any;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.url = this.router.url;
  }

}

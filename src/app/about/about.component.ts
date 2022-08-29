import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToTopService } from '../services/scroll-to-top.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  url: string = '';
  constructor(
    private scrollToTop: ScrollToTopService,
    private router: Router
  ) { 
    this.scrollToTop.scrollToTop();
  }

  ngOnInit() {
    this.url = this.router.url;
  }

}

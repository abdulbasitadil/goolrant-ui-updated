import { Component, OnInit } from '@angular/core';
import { ScrollToTopService } from '../services/scroll-to-top.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private scrollToTop: ScrollToTopService
  ) { 
    this.scrollToTop.scrollToTop();
  }

  ngOnInit(): void {
  }

}

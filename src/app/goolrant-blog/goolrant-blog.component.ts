import { Component, OnInit } from '@angular/core';
import { ScrollToTopService } from '../services/scroll-to-top.service';

@Component({
  selector: 'app-goolrant-blog',
  templateUrl: './goolrant-blog.component.html',
  styleUrls: ['./goolrant-blog.component.scss']
})
export class GoolrantBlogComponent implements OnInit {

  constructor(
    private scrollToTop: ScrollToTopService
  ) { 
    this.scrollToTop.scrollToTop();
  }

  ngOnInit(): void {
    
  }

}

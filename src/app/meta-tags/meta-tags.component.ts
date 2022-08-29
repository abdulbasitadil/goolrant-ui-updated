import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meta-tags',
  templateUrl: './meta-tags.component.html',
  styleUrls: ['./meta-tags.component.scss']
})
export class MetaTagsComponent implements OnInit {

  title: string = '';
  description: string = '';
  @Input() url: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const url = this.router.url;
    console.log(url,'=-=-=-=')
    if(url === '/') {
      this.title = 'GoolRant- Enabling your Digital Transformation';
      this.description = 'We work, engage and grow with businesses, people and industries who want to digitally upgrade with the best software, digital tools & scalable technology.';
    } else if(url === '/about') {
      this.title = 'GoolRant- Creating Tech Solutions that Transform Businesses';
      this.description = 'Experience stunning Digital Growth with tech-based Digital Solutions from GoolRant. Get flawless software tools from GoolRant next-gen digital & tech services.';
    } else if(url === '/cloud-service') {
      this.title = 'GoolRant- Scale up with the Top Cloud Services Provider';
      this.description = 'Now easily migrate to cloud & upgrade to a better way of doing business by leveraging the power of public cloud like AWS| Google Cloud| Microsoft Azure & More.';
    } else if(url === '/web-development') {
      this.title = 'Get the Best Web Development Services at GoolRant';
      this.description = 'Kickoff your Digital Growth with Websites from Goolrant| a Leading Web Development Company from the U.S that offers a wide range of top-end software solutions.';
    } else if(url === '/mobile-development') {
      this.title = 'Get the Best Mobile App Development Services at GoolRant';
      this.description = 'GoolRant makes your dream of creating a high-performance Mobile Application a reality. Now Experience fully customized mobile application development services.';
    } else if(url === '/software-development') {
      this.title = 'Innovative Software Development Company- GoolRant';
      this.description = 'Become the Ultimate Digitized Company by infusing the leading enterprise software development services from GoolRant. Stay Ahead with the Best Software.';
    } else if(url === '/web-app-development') {
      this.title = 'Transform with Best Web App Development Services by GoolRant';
      this.description = 'Speed up your Digital Growth with the Best Web Application Development Services from GoolRant. Unleash the true potential of your digitized business.';
    } else if(url === '/it-staffing') {
      this.title = '';
      this.description = '';
    }
  }

}

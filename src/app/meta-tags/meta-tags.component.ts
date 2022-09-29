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
  keywords: string = '';
  @Input() url: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const url = this.router.url;
    console.log(url,'=-=-=-=')
    if(url === '/') {
      this.title = 'Web Development Companies in USA | Leading Web Design Agency USA | Goolrant Technologies';
      this.keywords = 'Top Web Developers in the United States, Web Development Companies in USA, Leading Web Development Company In USA, Top web development companies in USA, Leading Web Design Agency USA, Top software development companies in USA, Top Web Developers in the United States, Top Web Development Companies in 2022, Web Development Company in USA, Best Web Development Company in USA, Web Development Company USA, Leading Web Development Company In USA, Software Development Companies in USA in 2022, Top Software Development Companies USA 2022, mobile app development company in united states, software development companies in united states, Web App Development in united states, it staffing recruitment & training in united states, Digital Marketing Companies in USA, SEO Companies in USA, Digital Marketing Companies in USA, SEO Companies in USA, Digital Marketing Companies in India, SEO Companies in India, Digital Marketing Companies in Canada, SEO Companies in Canada, Digital Marketing Companies in Afghanistan, SEO Companies in Afghanistan, digital marketing companies in united kingdom, SEO companies in united kingdom, digital marketing companies in germany, Best digital marketing companies in germany, Best seo companies in germany';
      this.description = 'We work, engage and grow with businesses, people and industries who want to digitally upgrade with the best software, digital tools & scalable technology.';
    } else if(url === '/about') {
      this.title = 'Website Design Company In India | Web Development Company In India | Goolrant Technologies';
      this.keywords = 'Website Design Company In India, Web Development Company In India, Best Web Development Company In India, Mobile App Development Company In India, SEO Company In India, Best Digital Marketing Company In India, Web development company in India, Top Web Development Companies in India, Top Web Developers in India, Best Web Designing Company in India, Best website development company in India, Web Development Company India, Mobile App Development Company In India, Best Mobile App Development Company In India, software development companies in India, Web App Development in India, it staffing recruitment & training in India, software development companies in India, Digital Marketing Companies in India, SEO Companies in India'
      this.description = 'Experience stunning Digital Growth with tech-based Digital Solutions from GoolRant. Get flawless software tools from GoolRant next-gen digital & tech services.';
    } else if(url === '/cloud-service') {
      this.title = 'Cloud Connectivity Solutions USA | Cloud Consulting Services Provider in USA';
      this.keywords = 'Cloud Connectivity Solutions USA, Cloud Consulting Services Provider in USA, Cloud Consulting Services Provider in India, Top Cloud Computing Companies in United States,Top Cloud Computing Companies in UK, Top Cloud Computing Companies in India, Top Cloud Computing Companies in afghanistan, Cloud Computing Companies in germany, Cloud Computing Companies in Canada, Best Cloud Computing Services in USA, Best Cloud Computing Services in India, Best Cloud Computing Services in afghanistan,Best Cloud Computing Services in Canada, Best Cloud Computing Services in Germany ';
      this.description = 'Now easily migrate to cloud upgrade to a better way of doing business by leveraging the power of public cloud like AWS Google Cloud Microsoft Azure More.';
    } else if(url === '/web-development') {
      this.title = 'web development company in germany | web design company in germany | Goolrant Technologies';
      this.keywords = 'Top Web Developers in the United States, Web Development Companies in USA, Leading Web Development Company In USA, Top web development companies in USA, Leading Web Design Agency USA, Top Web Developers in the United States, Top Web Development Companies in 2022, Web Development Company in USA, Best Web Development Company in USA, Web Development Company USA, Leading Web Development Company In USA, Web Development Company In India, Best Web Development Company In India, Web development company in India, Top Web Development Companies in India, Top Web Developers in India, Web Development Agency in Canada, Top Web Developers in Canada, Web Development Companies in Canada, Top Web Development Companies in Canada, Best Top Web Development Companies in Kabul Afghanistan, Best Web Development Companies and Firms in Kabul, Afghanistan, best Web Development companies and agencies in Kabul, Afghanistan, Web Development agencies in Kabul, Afghanistan, Best Web Development Companies in Kabul, Afghanistan, Web Agency company in united kingdom, web development company london, top web development companies in uk, web development company in germany,web design company in germany'
      this.description = 'Kickoff your Digital Growth with Websites from Goolrant| a Leading Web Development Company from the U.S that offers a wide range of top-end software solutions.';
    } else if(url === '/mobile-development') {
      this.title = 'mobile app development company in united states | Mobile App Development Company In India | Goolrant Technologies';
      this.keywords = 'mobile app development company in united states, Mobile App Development Company In India, Best Mobile App Development Company In India, mobile app development company in Canada, mobile app development company in Canada, mobile app development company in Afghanistan, mobile app development company in london, mobile app development company in germany, best mobile app development company in germany';
      this.description = 'GoolRant makes your dream of creating a high-performance Mobile Application a reality. Now Experience fully customized mobile application development services.';
    } else if(url === '/software-development') {
      this.title = 'Software Development Companies in Afghanistan | Software Development Companies in Canada | Goolrant Technologies';
      this.keywords = 'software development companies in germany, software development companies in united kingdom, best software development companies in uk, Software Development Companies in Afghanistan, Software Development Companies in Canada, software development companies in India, Software Development Companies in USA in 2022';
      this.description = 'Become the Ultimate Digitized Company by infusing the leading enterprise software development services from GoolRant. Stay Ahead with the Best Software.';
    } else if(url === '/web-app-development') {
      this.title = 'Web App Development Company USA | web app development company in Germany | Goolrant Technologies';
      this.keywords = 'web app development company in germany, Web Development Company USA, app development companies uk, Web App Development in Afghanistan, Web App Development in Canada,Web App Development in India, Web App Development in united states'
      this.description = 'Speed up your Digital Growth with the Best Web Application Development Services from GoolRant. Unleash the true potential of your digitized business.';
    } else if(url === '/it-staffing') {
      this.title = 'IT recruiters in germany | IT staffing recruitment & training companies in uk | Goolrant Technologies';
      this.keywords = 'it recruiters in germany, it staffing recruitment & training companies in uk, it staffing recruitment & training in Afghanistan, it staffing recruitment & training in Canada, it staffing recruitment & training in India, it staffing recruitment & training in united states';
      this.description = "GoolRant's team has expertise in jointly working and collaborating with your company for delivering and developing a competent staffing and training strategy for your IT department.";
    }
  }

}

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WebDevelopmentComponent } from './glrant-services/web-development/web-development.component';
import { CloudServicesComponent } from './glrant-services/cloud-services/cloud-services.component';
import { MobileDevelopmentComponent } from './glrant-services/mobile-development/mobile-development.component';
import { SoftwareDevelopmentComponent } from './glrant-services/software-development/software-development.component';
import { AboutComponent } from './about/about.component';
import { WebAppServicesComponent } from './glrant-services/web-app-services/web-app-services.component';
import { LetsConnectComponent } from './lets-connect/lets-connect.component';
import { GoolrantBlogComponent } from './goolrant-blog/goolrant-blog.component';
import { ItStaffingTrainingComponent } from './glrant-services/it-staffing-training/it-staffing-training.component';
import { BlogDetailsComponent } from './goolrant-blog/blog-details/blog-details.component';
import { MetaTagsComponent } from './meta-tags/meta-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    WebDevelopmentComponent,
    CloudServicesComponent,
    MobileDevelopmentComponent,
    SoftwareDevelopmentComponent,
    AboutComponent,
    WebAppServicesComponent,
    LetsConnectComponent,
    GoolrantBlogComponent,
    ItStaffingTrainingComponent,
    BlogDetailsComponent,
    MetaTagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
   ToastrModule.forRoot({
      closeButton: true,
      timeOut: 15000, // 15 seconds
      progressBar: true,
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

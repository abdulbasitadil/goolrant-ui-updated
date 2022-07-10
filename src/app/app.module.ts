import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { GoolrantFutureComponent } from "./goolrant-future/goolrant-future.component";
import { WhyUsComponent } from "./why-us/why-us.component";
import { GlrantServicesComponent } from "./glrant-services/glrant-services.component";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { OurClientComponent } from './our-client/our-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GoolrantFutureComponent,
    WhyUsComponent,
    GlrantServicesComponent,
    OurClientComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IvyCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

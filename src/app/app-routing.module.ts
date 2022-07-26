import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CloudServicesComponent } from './glrant-services/cloud-services/cloud-services.component';
import { MobileDevelopmentComponent } from './glrant-services/mobile-development/mobile-development.component';
import { SoftwareDevelopmentComponent } from './glrant-services/software-development/software-development.component';
import { WebAppServicesComponent } from './glrant-services/web-app-services/web-app-services.component';
import { WebDevelopmentComponent } from './glrant-services/web-development/web-development.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "contact-us",
    component: ContactUsComponent,
  },
  {
    path: "cloud-service",
    component: CloudServicesComponent,
  },
  {
      path: 'about',
      component: AboutComponent,
  },
  {
      path: 'cloud-service',
      component: CloudServicesComponent,
  },
  {
    path: "web-development",
    component: WebDevelopmentComponent,
  },
  {
    path: "mobile-development",
    component: MobileDevelopmentComponent,
  },
  {
    path: "software-development",
    component: SoftwareDevelopmentComponent,
  },
  {
    path: "web-app-development",
    component: WebAppServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

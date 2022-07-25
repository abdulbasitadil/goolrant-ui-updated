import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CloudServicesComponent } from './glrant-services/cloud-services/cloud-services.component';
import { MobileDevelopmentComponent } from './glrant-services/mobile-development/mobile-development.component';
import { SoftwareDevelopmentComponent } from './glrant-services/software-development/software-development.component';
import { WebDevelopmentComponent } from './glrant-services/web-development/web-development.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
      path: 'contact-us',
      component: ContactUsComponent,
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
      path: 'web-development',
      component: WebDevelopmentComponent,
  },
  {
      path: 'mobile-development',
      component: MobileDevelopmentComponent,
  },
  {
      path: 'software-development',
      component: SoftwareDevelopmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

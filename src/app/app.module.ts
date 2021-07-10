import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PackagesComponent } from './packages/packages.component';
import { EmailUsComponent } from './buttons/email-us/email-us.component';
import { SeeInstaComponent } from './buttons/see-insta/see-insta.component';
import { InquiryFormComponent } from './inquiry-form/inquiry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { OurApproachComponent } from './our-approach/our-approach.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { SeePackagesComponent } from './buttons/see-packages/see-packages.component';
import { PackageOverviewComponent } from './package-overview/package-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HowWeWorkComponent,
    FaqComponent,
    HomeComponent,
    PackagesComponent,
    EmailUsComponent,
    SeeInstaComponent,
    InquiryFormComponent,
    IntroSectionComponent,
    OurApproachComponent,
    OurWorkComponent,
    SeePackagesComponent,
    PackageOverviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

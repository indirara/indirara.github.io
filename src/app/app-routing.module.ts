import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { PackagesComponent } from './packages/packages.component';

const routes: Routes = [
  { path: '', component: PackagesComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'about-us', component: AboutUsComponent },
  // { path: 'how-we-work', component: HowWeWorkComponent },
  // { path: 'faq', component: FaqComponent },
  // { path: 'home', component: PackagesComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

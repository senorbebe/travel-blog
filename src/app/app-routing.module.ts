import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { HomeComponent } from './home/home.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PlacesComponent } from './places/places.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { VolunteeringComponent } from './volunteering/volunteering.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'volunteering', component: VolunteeringComponent},
  {path: 'articles/:articleName', component: ArticlePageComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

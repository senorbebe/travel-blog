import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoHeroComponent } from './video-hero/video-hero.component';
import { CountriesComponent } from './countries/countries.component';
import { StoriesComponent } from './stories/stories.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticleService } from './service/article-service';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VideoHeroComponent,
    CountriesComponent,
    StoriesComponent,
    HeaderComponent,
    HomeComponent,
    ArticlePageComponent,
    FooterComponent,
    InputComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    ArticleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

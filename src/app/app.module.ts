import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Carousel2Component } from './carousel2/carousel2.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { HomeComponent } from './body/home.component';
import { SearchComponent } from './body/search.component';
import { MoviesComponent } from './body/movies.component';
import { SportsComponent } from './body/sports.component';
import { AppRoutingModule } from './app-routing.module';
import { TvComponent } from './body/tv.component';
import { MystuffComponent } from './body/mystuff.component';
import { HubsComponent } from './body/hubs.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { EditUserInfoComponent } from './header/edit-user-component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    CarouselComponent,
    LayoutMainComponent,
    CardComponent,
    Carousel2Component,
    BodyComponent,
    HomeComponent,
    SearchComponent,
    MoviesComponent,
    SportsComponent,
    TvComponent,
    MystuffComponent,
    HubsComponent,
    UserInfoComponent,
    EditUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'hulu-web-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

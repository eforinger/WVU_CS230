import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home.component';
import { MoviesComponent } from './body/movies.component';
import { SearchComponent } from './body/search.component';
import { SportsComponent } from './body/sports.component';
import { LayoutMainComponent } from './layout/layout-main.component';

const routes: Routes = [
  { path: 'home', component: LayoutMainComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'sports', component: SportsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

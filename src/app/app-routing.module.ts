import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubsComponent } from './body/hubs.component';
import { MoviesComponent } from './body/movies.component';
import { MystuffComponent } from './body/mystuff.component';
import { SearchComponent } from './body/search.component';
import { SportsComponent } from './body/sports.component';
import { TvComponent } from './body/tv.component';
import { LayoutMainComponent } from './layout/layout-main.component';

const routes: Routes = [
  { path: 'home', component: LayoutMainComponent },
  { path: 'tv', component: TvComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'mystuff', component: MystuffComponent },
  { path: 'hubs', component: HubsComponent}
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

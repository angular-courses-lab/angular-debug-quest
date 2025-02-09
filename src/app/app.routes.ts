import { Routes } from '@angular/router';
import { DCHeroListComponent } from './features/heroes/pages/dc-hero-list/dc-hero-list.component';
import { MarvelHeroListComponent } from './features/heroes/pages/marvel-hero-list/marvel-hero-list.component';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './features/heroes/pages/hero-form/hero-form.component';
import { DcHeroDetailsComponent } from './features/heroes/pages/dc-hero-details/dc-hero-details.component';
import { MarvelHeroDetailsComponent } from './features/heroes/pages/marvel-hero-details/marvel-hero-details.component';
import { SocksListComponent } from './features/socks/pages/socks-list/socks-list.component';
import { CartComponent } from './features/socks/pages/cart/cart.component';

export const routes: Routes = [
  { path: '', component: DCHeroListComponent },
  { path: 'dc-heroes', component: DCHeroListComponent },
  { path: 'marvel-heroes', component: MarvelHeroListComponent },
  { path: 'hero-form', component: HeroFormComponent },
  { path: 'dc-hero/:dcId', component: DcHeroDetailsComponent },
  { path: 'marvel-hero/:marvelId', component: MarvelHeroDetailsComponent },
  { path: 'socks', component: SocksListComponent },
  { path: 'socks/cart', component: CartComponent },
];

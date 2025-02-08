import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { HeroWithFavorite } from '../../models/hero-favorite.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marvel-hero-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './marvel-hero-list.component.html',
  standalone: true
})
export class MarvelHeroListComponent implements OnInit {
  heroes: HeroWithFavorite[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroesWithFavorite().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  getFavoriteHeroes(): HeroWithFavorite[] {
    return this.heroes.filter((hero) => hero.isFavorite);
  }
}

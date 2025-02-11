import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dc-hero-list',
  imports: [RouterLink],
  templateUrl: './dc-hero-list.component.html',
})
export class DCHeroListComponent implements OnInit {
  heroes: Hero[] = [];
  filteredDCHeroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
    this.filteredDCHeroes = this.heroes.filter(
      hero => hero.publisher === 'DC Comics'
    );
  }
}

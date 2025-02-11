import { Component, input } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
})
export class HeroItemComponent {
  hero = input.required<Hero>();
}

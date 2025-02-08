import { Component, inject, input } from '@angular/core';
import { HeroItemComponent } from '../../components/hero-item.component';
import { HeroService } from '../../services/hero.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-marvel-hero-details',
  templateUrl: './marvel-hero-details.component.html',
  imports: [HeroItemComponent, AsyncPipe],
  standalone: true
})
export class MarvelHeroDetailsComponent {
  heroService = inject(HeroService);

  marvelId = input<string>();
  hero$ = this.heroService.getHeroById(this.marvelId()!);
}

import { Component, inject, input } from '@angular/core';
import { HeroItemComponent } from '../../components/hero-item.component';
import { HeroService } from '../../services/hero.service';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-dc-hero-details',
  templateUrl: './dc-hero-details.component.html',
  imports: [HeroItemComponent, AsyncPipe],
})
export class DcHeroDetailsComponent {
  private readonly heroService = inject(HeroService);
  private readonly route = inject(ActivatedRoute);
  public hero$ = this.route.params.pipe(
    switchMap((params) => this.heroService.getHeroById(params['dcId']))
  );
}

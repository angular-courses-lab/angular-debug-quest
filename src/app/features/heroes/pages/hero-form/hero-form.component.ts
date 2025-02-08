import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  imports: [ReactiveFormsModule],
  templateUrl: './hero-form.component.html',
  standalone: true
})
export class HeroFormComponent {
  heroForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    power: new FormControl(''),
    alterEgo: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });
}

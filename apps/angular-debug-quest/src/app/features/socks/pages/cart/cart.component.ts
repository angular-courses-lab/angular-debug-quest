import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  providers: [CartService],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  protected cartService = inject(CartService);
}

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocksService } from '../../services/socks.service';
import { CartService } from '../../services/cart.service';
import { Sock } from '../../models/sock.model';
import { CurrencyPipe } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-socks-list',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  providers: [CartService],
  templateUrl: './socks-list.component.html',
})
export class SocksListComponent {
  private socksService = inject(SocksService);
  protected cartService = inject(CartService);

  socksResource = rxResource({
    loader: () => this.socksService.getSocks(),
  });

  socks = this.socksResource.value();
  isLoading = this.socksResource.isLoading();

  addToCart(sock: Sock): void {
    this.cartService.addToCart(sock);
  }
}

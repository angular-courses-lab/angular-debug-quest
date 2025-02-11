import { Injectable, signal } from '@angular/core';
import { CartItem, Sock } from '../models/sock.model';
import { computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<CartItem[]>([]);

  totalItems = computed(() =>
    this.cart().reduce((total, item) => total + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.cart().reduce(
      (total, item) => total + item.sock.price * item.quantity,
      0
    )
  );

  addToCart(sock: Sock) {
    const currentCart = this.cart();
    const existingItem = currentCart.find(item => item.sock.id === sock.id);

    if (existingItem) {
      this.cart.update(items =>
        items.map(item =>
          item.sock.id === sock.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.cart.update(items => [...items, { sock, quantity: 1 }]);
    }
  }

  removeFromCart(sockId: number) {
    this.cart.update(items => items.filter(item => item.sock.id !== sockId));
  }

  updateQuantity(sockId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(sockId);
      return;
    }

    this.cart.update(items =>
      items.map(item =>
        item.sock.id === sockId ? { ...item, quantity } : item
      )
    );
  }
}

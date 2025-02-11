import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sock } from '../models/sock.model';

@Injectable({
  providedIn: 'root',
})
export class SocksService {
  readonly #http = inject(HttpClient);

  getSocks(): Observable<Sock[]> {
    return this.#http.get<Sock[]>('http://localhost:3000/socks');
  }
}

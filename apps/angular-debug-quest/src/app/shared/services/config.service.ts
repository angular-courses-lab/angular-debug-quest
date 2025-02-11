import { Injectable, signal } from '@angular/core';

import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Config {
  defaultLanguage: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  readonly #http = inject(HttpClient);
  readonly config = signal<Config | null>(null);

  getConfig(): Observable<Config> {
    return this.#http.get<Config>('http://localhost:3000/config');
  }
}

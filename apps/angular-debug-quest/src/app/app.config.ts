import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from './shared/services/config.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAppInitializer(async () => {
      return async () => {
        const config = await firstValueFrom(inject(ConfigService).getConfig());
        inject(ConfigService).config.set(config);
      };
    }),
  ],
};

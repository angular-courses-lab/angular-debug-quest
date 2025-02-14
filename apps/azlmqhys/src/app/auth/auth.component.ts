import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

type LoginForm = {
  username: FormControl<string>;
  password: FormControl<string>;
};

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  imports: [ReactiveFormsModule],
})
export class AuthComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);

  loginForm: FormGroup<LoginForm> = this.fb.nonNullable.group({
    username: 'angularisbest',
    password: 'angularisbest',
  });

  onSubmit(): void {
    this.authService.login();
  }
}

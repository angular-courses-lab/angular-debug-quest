import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter, Router } from '@angular/router';
import { routes } from './app.routes';
import { ComponentFixture } from '@angular/core/testing';
describe('AppComponent', () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should have exactly one header element', async () => {
    await router.navigate(['/']);

    const compiled = fixture.nativeElement as HTMLElement;
    const headers = compiled.querySelectorAll('header');
    expect(headers.length).toBe(1);
  });
});

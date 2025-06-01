import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoracionChaquetaComponent } from './decoracion-chaqueta.component';

describe('DecoracionChaquetaComponent', () => {
  let component: DecoracionChaquetaComponent;
  let fixture: ComponentFixture<DecoracionChaquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecoracionChaquetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoracionChaquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoChaquetaComponent } from './tipo-chaqueta.component';

describe('TipoChaquetaComponent', () => {
  let component: TipoChaquetaComponent;
  let fixture: ComponentFixture<TipoChaquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoChaquetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoChaquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPantalonComponent } from './tipo-pantalon.component';

describe('TipoPantalonComponent', () => {
  let component: TipoPantalonComponent;
  let fixture: ComponentFixture<TipoPantalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPantalonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoPantalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

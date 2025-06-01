import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContornoMedidasComponent } from './contorno-medidas.component';

describe('ContornoMedidasComponent', () => {
  let component: ContornoMedidasComponent;
  let fixture: ComponentFixture<ContornoMedidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContornoMedidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContornoMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

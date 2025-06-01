import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargoMedidasComponent } from './largo-medidas.component';

describe('LargoMedidasComponent', () => {
  let component: LargoMedidasComponent;
  let fixture: ComponentFixture<LargoMedidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargoMedidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargoMedidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

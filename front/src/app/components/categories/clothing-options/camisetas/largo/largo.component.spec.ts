import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargoComponent } from './largo.component';

describe('LargoComponent', () => {
  let component: LargoComponent;
  let fixture: ComponentFixture<LargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

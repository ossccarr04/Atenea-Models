import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargoChaquetaComponent } from './largo-chaqueta.component';

describe('LargoChaquetaComponent', () => {
  let component: LargoChaquetaComponent;
  let fixture: ComponentFixture<LargoChaquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargoChaquetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargoChaquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

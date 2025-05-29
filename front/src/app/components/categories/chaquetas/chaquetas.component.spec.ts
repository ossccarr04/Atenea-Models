import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaquetasComponent } from './chaquetas.component';

describe('ChaquetasComponent', () => {
  let component: ChaquetasComponent;
  let fixture: ComponentFixture<ChaquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaquetasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

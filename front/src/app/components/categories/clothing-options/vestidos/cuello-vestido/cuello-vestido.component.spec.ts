import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuelloVestidoComponent } from './cuello-vestido.component';

describe('CuelloVestidoComponent', () => {
  let component: CuelloVestidoComponent;
  let fixture: ComponentFixture<CuelloVestidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuelloVestidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuelloVestidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

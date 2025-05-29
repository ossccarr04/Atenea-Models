import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargoVestidoComponent } from './largo-vestido.component';

describe('LargoVestidoComponent', () => {
  let component: LargoVestidoComponent;
  let fixture: ComponentFixture<LargoVestidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargoVestidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargoVestidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

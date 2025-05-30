import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargoFaldaComponent } from './largo-falda.component';

describe('TipoFaldaComponent', () => {
  let component: LargoFaldaComponent;
  let fixture: ComponentFixture<LargoFaldaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargoFaldaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargoFaldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

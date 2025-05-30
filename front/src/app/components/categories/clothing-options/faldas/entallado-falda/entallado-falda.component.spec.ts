import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntalladoFaldaComponent } from './entallado-falda.component';

describe('EntalladoFaldaComponent', () => {
  let component: EntalladoFaldaComponent;
  let fixture: ComponentFixture<EntalladoFaldaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntalladoFaldaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntalladoFaldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

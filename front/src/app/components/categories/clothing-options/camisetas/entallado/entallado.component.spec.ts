import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntalladoComponent } from './entallado.component';

describe('EntalladoComponent', () => {
  let component: EntalladoComponent;
  let fixture: ComponentFixture<EntalladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntalladoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntalladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

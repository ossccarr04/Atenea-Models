import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaldasComponent } from './faldas.component';

describe('FaldasComponent', () => {
  let component: FaldasComponent;
  let fixture: ComponentFixture<FaldasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaldasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaldasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

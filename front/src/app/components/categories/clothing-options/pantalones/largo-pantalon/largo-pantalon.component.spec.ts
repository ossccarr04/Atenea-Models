import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargoPantalonComponent } from './largo-pantalon.component';

describe('LargoPantalonComponent', () => {
  let component: LargoPantalonComponent;
  let fixture: ComponentFixture<LargoPantalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargoPantalonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargoPantalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

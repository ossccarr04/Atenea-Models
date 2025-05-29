import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaVestidoComponent } from './manga-vestido.component';

describe('MangaVestidoComponent', () => {
  let component: MangaVestidoComponent;
  let fixture: ComponentFixture<MangaVestidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaVestidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaVestidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

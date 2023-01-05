import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime1Component } from './anime1.component';

describe('Anime1Component', () => {
  let component: Anime1Component;
  let fixture: ComponentFixture<Anime1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anime1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

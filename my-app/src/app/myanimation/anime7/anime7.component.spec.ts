import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime7Component } from './anime7.component';

describe('Anime7Component', () => {
  let component: Anime7Component;
  let fixture: ComponentFixture<Anime7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anime7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

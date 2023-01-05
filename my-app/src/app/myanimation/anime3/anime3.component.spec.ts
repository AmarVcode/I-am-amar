import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime3Component } from './anime3.component';

describe('Anime3Component', () => {
  let component: Anime3Component;
  let fixture: ComponentFixture<Anime3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anime3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

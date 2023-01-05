import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime5Component } from './anime5.component';

describe('Anime5Component', () => {
  let component: Anime5Component;
  let fixture: ComponentFixture<Anime5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anime5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime6Component } from './anime6.component';

describe('Anime6Component', () => {
  let component: Anime6Component;
  let fixture: ComponentFixture<Anime6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anime6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

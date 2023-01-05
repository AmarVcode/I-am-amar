import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime4Component } from './anime4.component';

describe('Anime4Component', () => {
  let component: Anime4Component;
  let fixture: ComponentFixture<Anime4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anime4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

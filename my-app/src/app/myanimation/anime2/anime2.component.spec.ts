import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anime2Component } from './anime2.component';

describe('Anime2Component', () => {
  let component: Anime2Component;
  let fixture: ComponentFixture<Anime2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Anime2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Anime2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IknowComponent } from './iknow.component';

describe('IknowComponent', () => {
  let component: IknowComponent;
  let fixture: ComponentFixture<IknowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IknowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

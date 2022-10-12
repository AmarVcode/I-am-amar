import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IKnowComponent } from './i-know.component';

describe('IKnowComponent', () => {
  let component: IKnowComponent;
  let fixture: ComponentFixture<IKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IKnowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

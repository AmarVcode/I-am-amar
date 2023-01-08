import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsmeComponent } from './itsme.component';

describe('ItsmeComponent', () => {
  let component: ItsmeComponent;
  let fixture: ComponentFixture<ItsmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItsmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItsmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

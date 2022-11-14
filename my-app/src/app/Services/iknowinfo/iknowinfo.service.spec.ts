import { TestBed } from '@angular/core/testing';

import { IknowinfoService } from './iknowinfo.service';

describe('IknowinfoService', () => {
  let service: IknowinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IknowinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

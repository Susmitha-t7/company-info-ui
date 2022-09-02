import { TestBed } from '@angular/core/testing';

import { MessageCompanyService } from './message-company.service';

describe('MessageCompanyService', () => {
  let service: MessageCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

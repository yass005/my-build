import { TestBed, inject } from '@angular/core/testing';

import { ConfirmComponent } from './dialog-service.service';

describe('DialogServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmComponent]
    });
  });

  it('should be created', inject([ConfirmComponent], (service: ConfirmComponent) => {
    expect(service).toBeTruthy();
  }));
});

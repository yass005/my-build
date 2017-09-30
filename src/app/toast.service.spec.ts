import { TestBed, inject } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { Router } from '@angular/router';

describe('ToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastService, Router],


    });
  });

  it('should be created', inject([ToastService], (service: ToastService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { RawMaterialService } from './raw-material.service';
import {HttpClientModule} from "@angular/common/http";

describe('RawMaterialService', () => {
  let service: RawMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(RawMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

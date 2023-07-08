import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialNewComponent } from './raw-material-new.component';

describe('RawMaterialNewComponent', () => {
  let component: RawMaterialNewComponent;
  let fixture: ComponentFixture<RawMaterialNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawMaterialNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialDetailComponent } from './raw-material-detail.component';

describe('RawMaterialDetailComponent', () => {
  let component: RawMaterialDetailComponent;
  let fixture: ComponentFixture<RawMaterialDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RawMaterialDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

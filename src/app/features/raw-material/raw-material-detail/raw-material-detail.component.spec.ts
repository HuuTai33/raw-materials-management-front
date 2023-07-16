import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RawMaterialDetailComponent } from './raw-material-detail.component';
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {AppRoutingModule} from "../../../app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('RawMaterialDetailComponent', () => {
  let component: RawMaterialDetailComponent;
  let fixture: ComponentFixture<RawMaterialDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RawMaterialDetailComponent,
        NavbarComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
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

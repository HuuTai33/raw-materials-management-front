import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RawMaterialNewComponent } from './raw-material-new.component';
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {AppRoutingModule} from "../../../app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('RawMaterialNewComponent', () => {
  let component: RawMaterialNewComponent;
  let fixture: ComponentFixture<RawMaterialNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RawMaterialNewComponent,
        NavbarComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
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

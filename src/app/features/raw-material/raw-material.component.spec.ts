import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RawMaterialComponent } from './raw-material.component';
import {NavbarComponent} from "../shared/navbar/navbar.component";
import {AppRoutingModule} from "../../app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('RawMaterialComponent', () => {
  let component: RawMaterialComponent;
  let fixture: ComponentFixture<RawMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RawMaterialComponent,
        NavbarComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

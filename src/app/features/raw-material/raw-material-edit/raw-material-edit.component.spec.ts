import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RawMaterialEditComponent } from './raw-material-edit.component';
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {AppRoutingModule} from "../../../app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

describe('RawMaterialEditComponent', () => {
  let component: RawMaterialEditComponent;
  let fixture: ComponentFixture<RawMaterialEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RawMaterialEditComponent,
        NavbarComponent
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RawMaterialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

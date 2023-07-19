import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
import { RawMaterialComponent } from './features/raw-material/raw-material.component';
import { RawMaterialDetailComponent } from './features/raw-material/raw-material-detail/raw-material-detail.component';
import { RawMaterialEditComponent } from './features/raw-material/raw-material-edit/raw-material-edit.component';
import { RawMaterialNewComponent } from './features/raw-material/raw-material-new/raw-material-new.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './features/shared/navbar/navbar.component';
import {ApiModule} from "./core/api/api.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    RawMaterialComponent,
    RawMaterialDetailComponent,
    RawMaterialEditComponent,
    RawMaterialNewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

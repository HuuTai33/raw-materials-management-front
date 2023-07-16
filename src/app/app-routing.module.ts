import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {RawMaterialComponent} from "./features/raw-material/raw-material.component";
import {RegisterComponent} from "./features/register/register.component";
import {RawMaterialDetailComponent} from "./features/raw-material/raw-material-detail/raw-material-detail.component";
import {RawMaterialEditComponent} from "./features/raw-material/raw-material-edit/raw-material-edit.component";
import {RawMaterialNewComponent} from "./features/raw-material/raw-material-new/raw-material-new.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'rawmaterials',
    component: RawMaterialComponent,
  },
  {
    path: 'rawmaterials/new',
    component: RawMaterialNewComponent,
  },
  {
    path: 'rawmaterials/:id',
    component: RawMaterialDetailComponent,
  },
  {
    path: 'rawmaterials/:id/edit',
    component: RawMaterialEditComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {ApiInterceptor} from "./api.interceptor";

const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    interceptors
  ]
})
export class ApiModule {

}

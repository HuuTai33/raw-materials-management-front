import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { format } from 'date-fns';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const timestampsRequest = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxx");
    request = request.clone({
      headers: request.headers
        .set('x-api-timestamp', timestampsRequest)
    });

    return next.handle(request);
  }
}

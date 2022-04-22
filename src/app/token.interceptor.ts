import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      console.log('Inside Interceptor', request);
      const modifiedRequest = request.clone({ setHeaders: { Authorization: '12354898498498452648899' } });
    return next.handle(modifiedRequest);
  }
}

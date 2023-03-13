import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //get the token into
    const tokendetails=this.auth.getToken();
    if(tokendetails){

      request=request.clone({
        setHeaders:{Authorize:`Bearer ${tokendetails}`}
      })
    }
    return next.handle(request);
  }
}

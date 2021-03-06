import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS, HttpEvent } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { TokenStorageService } from "./token-storage.service";

const TOKEN_HEADER_KEY = 'Authorization'; 

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
];
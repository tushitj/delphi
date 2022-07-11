import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  // @ts-ignore
  url: String;
  constructor(/*private _portalStorageService: PortalStorageService,*/ private _router: Router) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.url = 'http://localhost:8080'; // environment.apiUrl;
    request = request.clone({
      url: this.url + request.url
    });
   // const token = this._portalStorageService.getAuthFromLocalStorage()?.token || undefined;

    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
          }
        },
      ), catchError((error: any) => {
        if (error.status === 401) {
          console.error('caught 401');
          this._router.navigate(['/auth/logout']);
        } else if (error.status === 504) {
          console.error('caught 504');
          console.log('url ' + this._router.url.split(/[?#]/)[0]);
          if (this._router.url.split(/[?#]/)[0] !== '/auth/login') {
            // this.auth.logout(true);
            this._router.navigate(['/auth/logout']);
          }
        } else if (error.status === 406 || error.status === 400 || error.status === 500) {

          return throwError(error.error);
        }
        else {
          console.error(`error on interceptor ${JSON.stringify(error)}`);

        }
        return throwError(error.error);
      }));
  }
}

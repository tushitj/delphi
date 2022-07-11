import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {NgxPermissionsGuard, NgxPermissionsModule} from 'ngx-permissions';
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "./core/interceptor/interceptor.service";
import {BooksService} from "./core/services/books.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: () => import('./components/auth/auth.module').then((m) => m.AuthModule)
      },
      {
        path: '',
        loadChildren: () => import('./components/pages/pages.module').then((m) => m.PagesModule),
        // canActivate: [NgxPermissionsGuard],
        // data: {
        //   redirectTo: 'auth',
        //   only: ['Admin', 'User'],
        // }

      }
    ]),
    NgxPermissionsModule.forRoot()
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

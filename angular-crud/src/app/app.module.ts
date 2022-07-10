import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {NgxPermissionsGuard, NgxPermissionsModule} from 'ngx-permissions';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: () => import('./components/auth/auth.module').then((m) => m.AuthModule)
      },
      {
        path: '',
        loadChildren: () => import('./components/pages/pages.module').then((m) => m.PagesModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          redirectTo: 'auth',
          only: ['Admin', 'User'],
        }

      }
    ]),
    NgxPermissionsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

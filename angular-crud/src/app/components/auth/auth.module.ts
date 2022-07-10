import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthComponent} from './auth.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthComponent,
        children: [{
          path: '',
          redirectTo: 'login', pathMatch: 'full',
        },
          {
            path: 'login',
            component: LoginComponent,

          }]
      }
    ]),
  ]
})

export class AuthModule {
}

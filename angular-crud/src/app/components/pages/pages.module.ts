import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {AuthComponent} from "../auth/auth.component";
import {LoginComponent} from "../auth/login/login.component";
import { PagesComponent } from './pages.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatDividerModule} from "@angular/material/divider";



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    SidebarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PagesComponent,
        children: [{
          path: '',
          redirectTo: 'dashboard', pathMatch: 'full',
        },
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'books',
            loadChildren: () => import('./books/books.module').then((m) => m.BooksModule),
          }]
      }
    ]),
    MatDividerModule,
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../../core/models/material";
import { EditBookDialogComponent } from './edit-book-dialog/edit-book-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BooksComponent,
    EditBookDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BooksComponent
      }

    ])
  ],
  entryComponents: [EditBookDialogComponent]
})
export class BooksModule { }

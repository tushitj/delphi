import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../../../core/models/book";

@Component({
  selector: 'app-edit-book-dialog',
  templateUrl: './edit-book-dialog.component.html',
  styleUrls: ['./edit-book-dialog.component.css']
})
export class EditBookDialogComponent implements OnInit {
  // @ts-ignore
  book: Book;
  bookForm : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditBookDialogComponent>,
    private _fb1: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.bookForm = _fb1.group(
    {
      'id': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'price': ['', [Validators.required]],
      'language': ['', [Validators.required]]
    }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.book = this.data.book;
    if(this.book){
      this.bookForm.setValue(this.book);
    }
  }

  update(): void{
    this.dialogRef.close({
      data: this.bookForm.value

    });

  }

}

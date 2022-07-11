import { Component, OnInit } from '@angular/core';
import {Book} from "../../../core/models/book";
import {BooksService} from "../../../core/services/books.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {EditBookDialogComponent} from "./edit-book-dialog/edit-book-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'language', 'actions'];
  // @ts-ignore
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  // @ts-ignore
  newBook: Book = new Book();

  constructor(private _booksService: BooksService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getBooks();

  }

  getBooks(): void {
    this._booksService.getBooks().subscribe(data => {
      this.books = data;
      this.dataSource = new MatTableDataSource(this.books);
      console.log(this.books);
    });
  }

  editDialog(book: Book): void {
    const dialogRef = this.dialog.open(EditBookDialogComponent, {
      width: '50%',
      data: {book: book},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.data){
        this._booksService.updateBook(result.data).subscribe((data : any) => {
          this.getBooks();
          this.openSnackBar("books data", "updated");
        });
      }
    });
  }


  delete(book: Book): void {
    console.log(book);
    this._booksService.deleteBook(book.id).subscribe((data:any) => {
      this.getBooks();
      this.openSnackBar("books data", "deleted")
    });
  }

  createBook(book: Book) {
    console.log(book);
    this._booksService.createBook(book).subscribe((data:any) => {
      this.getBooks();
      this.openSnackBar("books data", "created");
      this.newBook  = {} as Book;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}

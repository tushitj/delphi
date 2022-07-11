import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private API_URL = '/api';
  private API_BOOKS_EXTERNAL = '/books';

  constructor(private _http: HttpClient) { }

  public getBookById(id: number) : any {
    return this._http.get<any>(`${this.API_URL}${this.API_BOOKS_EXTERNAL}/${id}`);
  }

  getBooks() {
    return this._http.get<any>(`${this.API_URL}${this.API_BOOKS_EXTERNAL}`);
  }

  updateBook(book: Book) : any {
    return this._http.put<any>(`${this.API_URL}${this.API_BOOKS_EXTERNAL}`, book);
  }

  deleteBook(id: number) {
    return this._http.delete<any>(`${this.API_URL}${this.API_BOOKS_EXTERNAL}/${id}`);
  }

  createBook(book: Book) : any {
    return this._http.post<any>(`${this.API_URL}${this.API_BOOKS_EXTERNAL}`, book);
  }
}

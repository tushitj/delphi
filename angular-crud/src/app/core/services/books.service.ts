import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _http: HttpClient) { }


  public books() : Observable<any[]> {
    return this._http.get<any[]>(`localhost:8080/books`);
  }

  public bookById(id: number) : any {
    return this._http.get(`localhost:8080/books/${id}`);
  }

  public createBook : any
}

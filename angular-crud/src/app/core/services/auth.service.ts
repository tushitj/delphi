import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // currentUser$: Observable<any>;

  constructor(private _http:HttpClient) { }

  // public get currentUserValue(): any{
  //   // return this.currentUser$;
  // }
}

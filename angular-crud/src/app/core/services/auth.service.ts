import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserSubject: BehaviorSubject<any>;
  currentUser$: any;

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  set currentUserValue(user: any) {
    this.currentUserSubject.next(user);
  }

  constructor(private _http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  public logout() {

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient,private _Router:Router) {
    //to prevent userData get null when user make refresh
    if(localStorage.getItem('userToken') !=null){
      this.saveUserData();
    }
  }

  userData = new BehaviorSubject(null); 
  //save and decode userData
  saveUserData(){
    let encodedUserData =JSON.stringify(localStorage.getItem("userToken"));
    this.userData.next(jwtDecode(encodedUserData));
  }

  //logout function
  logOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['login'])

  }
  //registration function
  register(formData: object): Observable<any> {
    return this._HttpClient.post(
      `https://route-egypt-api.herokuapp.com/signup`,
      formData
    );
  }

  //login function
  login(formData: object): Observable<any> {
    return this._HttpClient.post(
      `https://route-egypt-api.herokuapp.com/signin`,
      formData
    );
  }
} 

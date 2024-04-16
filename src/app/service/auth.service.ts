import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth:boolean;
  constructor() { }

  signIn(){
    this.isAuth=true;
  }
  signOut(){
    this.isAuth=false;
  }
}

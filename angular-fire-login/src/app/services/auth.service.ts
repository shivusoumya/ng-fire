import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  signUp(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
  signIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  getUser(){
    return this.auth.authState;
  }
  singOut(){
    return this.auth.signOut();
  }
}

/*---------------------------Service pour authetification-------------------------  */
/* Service AuthProvider qui gère les fonction de connexion en utilisant angularfire2*/
/*ce service permet d'avoir de Surveiller l'état d'authentification en temps réel   */
/* AngularFireAuth.authState fournit un <Firebase.User> observable pour surveiller  */
/*---------------------------------------------------------------------------------*/

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


@Injectable()
export class AuthService {
user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }


login(email: string, pass: string): firebase.Promise<any>
{
 return this.afAuth.auth.signInWithEmailAndPassword(email, pass);
}

   signOut() : firebase.Promise<any>{
   return this.afAuth.auth.signOut();
  }




}

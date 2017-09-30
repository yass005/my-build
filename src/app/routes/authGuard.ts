/*---------------------------AuthGuard Service  --------------------- */
/*  AuthGuard Service implement Interface CanActivate  to be a guard */
/* deciding if a child route can beactivated.                       */
/*-----------------------------------------------------------------*/


//import rxjs operator
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';



import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}


  //CanActivate - Decides if a route can be activated
  //the router guard that takes the first emitted value from the Observable and maps it
  // to a boolean. Then we use the RxJS do function to catch unauthenticated users and
  // redirect them to the login page
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.afAuth.authState
            .take(1)
            .map(authState => !!authState)
            .do(authenticated => {
              if (!authenticated) {
                console.log("access denied")
                  this.router.navigate(['/login']);
              }
            });
  }
}

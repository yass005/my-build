
/*--------------------------- Page de login    -----------------------------*/
/*	dans cette page j'ai injecter  le service de l'authetification         */
/*	Connexion avec controle de l'administrateur  et validation des données*/
/*---------------------------------------------------------------------- */
import {AuthService} from '../providers/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {CustomValidators} from 'ng2-validation';
import {AngularFireDatabase} from 'angularfire2/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 LoginForm: FormGroup;
  error: boolean;
  message : string;
  constructor( public fb: FormBuilder,  public router: Router,private Auth: AuthService, public db: AngularFireDatabase) {

       this.LoginForm = fb.group({
      'email': ['', Validators.compose([Validators.required, CustomValidators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

   }

  ngOnInit() {
  }


  //fonction de login
 submitForm($ev, value: any) {
          this.error=false;
    $ev.preventDefault();
    if (this.LoginForm.valid) {
      this.Auth.login(value.email, value.password).then((success) => {
        this.db.object('/userProfile/' + success.uid).subscribe(res => {
          if (res.isAdmine === true) {
            this.router.navigate(['dashboard'])
          } else {
            this.error=true;
          }
        })
      }).catch((error) => {
        this.message=error.message;
             this.error=true;
      });
    }
  }
}

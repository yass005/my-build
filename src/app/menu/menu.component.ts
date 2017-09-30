
/*--------------------------- Menu---------------*/
/*simple menu for  navigation  using angular routes */
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../providers/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private Auth : AuthService, public router : Router) { }

  ngOnInit() {
  }



  logout(){
    this.Auth.signOut().then( res => {
     this.router.navigate(['login']);
    }).catch(err => {
      console.log(err);
    })

  }
}

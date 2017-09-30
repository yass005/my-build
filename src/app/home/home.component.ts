/*--------------------------- Page principale de l'application  --------------------------------*/
/*	this page take an observabale fronm  every collection in the database and show             */
/* the number of category 	online annonce and annonce in the wait list and list of users     */
/*-------------------------------------------------------------------------------------------*/
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
  import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmComponent } from '../dialog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public userList: any[] = [];
  public p: any;
  ref: Observable<any>;

  public totalCategories;
  public totalUsers;
  public AnnoncesAValider;
  public annoncesValide;

  constructor(public af: AngularFireDatabase, private dialogService:DialogService) {

    this.getUsersData();
    this.getCategoriesData();
    this.AnnoncesaValider();
    this.AnnoncesValide();
  }



  getUsersData() {
    this.ref = this.af.list('/userProfile');
    this.ref.subscribe(val => {
      this.userList = val;
      this.totalUsers = val.length;
    })
  }

  getCategoriesData() {
    this.ref = this.af.list('/categories');
    this.ref.subscribe(val => {
      this.totalCategories = val.length;
    })
  }

  AnnoncesaValider() {
    this.ref = this.af.list('/AnnoncesAValidé');
this.ref.subscribe(val => {
 this.AnnoncesAValider= val.length;
 console.log( this.AnnoncesAValider);
});

}


  AnnoncesValide() {
  this.ref = this.af.list('/Annonces');
this.ref.subscribe(val => {
 this.annoncesValide= val.length;
 console.log( this.annoncesValide);
});


}

  /*    showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
      }

      showError() {
        this.toastr.error('This is not good!', 'Oops!');
      }

      showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
      }

      showInfo() {
        this.toastr.info('Just some information for you.');
      }

      showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
      }*/

}

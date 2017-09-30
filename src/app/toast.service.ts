/*---------------------------  ToastService------------------------*/
/*ng2Toast is a simple Angular provider for toast notifications.   */
/*---------------------------------------------------------------*/

import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DialogService } from "ng2-bootstrap-modal";
import { Toast } from 'ng2-toastr/src/toast';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Injectable()
export class ToastService {

  constructor(public router: Router, public toastr: ToastsManager ) {



  }
//message de confirmations
  showSuccess(Message : string) {
     this.toastr.success(Message, 'Success!', {data:  '/dashboard'});
     this.toastr.onClickToast()
    .subscribe( toast => {
        if (toast.data ) {
          // navigate to
          this.router.navigate([toast.data]);
        }
    });
 }

 //message d'erreur
    showError(err) {
  this.toastr.error(`${err}`, 'Oops!');

}
showwarning(warning : string) {
this.toastr.warning(warning, 'Alert!');

}
//fonction init
toatsinit(vcr: ViewContainerRef){
    this.toastr.setRootViewContainerRef(vcr);
}

}

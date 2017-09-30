/*--------------------------- DialogService------------------------*/
/*library to make usage of bootstrap modal plugin easier in Angular2.*/
/* Create clear and reusable modal components. It makes managing dialogs*/
/* painless and more clear.                                       */
/*---------------------------------------------------------------*/

import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";




export interface ConfirmModel {
  title:string;
  message:string;
}


@Component({
    selector: 'confirm',
    templateUrl: './dialog.html',
})


export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }

}

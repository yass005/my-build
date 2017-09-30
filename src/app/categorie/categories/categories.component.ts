/*-------Page ModifierCategorieComponent    -------*/
/*	-page to update a   categorie    ------------ */
/*-----------------------------------------------*/
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Router} from '@angular/router';
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmComponent } from '../../dialog-service.service';
import { ToastService } from '../../toast.service';



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent   {

  public p: any;
  categoryData: FirebaseListObservable<any>;

  constructor( public toastService : ToastService, private dialogService:DialogService,
    public af: AngularFireDatabase, public router: Router, vcr: ViewContainerRef) {
          this.toastService.toatsinit(vcr);
    this.categoryData = af.list('/categories');
  }


  categoryShow(key) {
    this.router.navigate(['/categories/viewCategory', key]);
  }

deleteCategory(key) {
   let disposable = this.dialogService.addDialog(ConfirmComponent, {
                title:'Suppression  ',
                message:'Êtes-vous sûr de vouloir supprimer définitivement cette catégorie?'})
                .subscribe((isConfirmed)=>{
                    //We get dialog result
                    if(isConfirmed) {
                this.categoryData.remove(key).then((res) => {
                this.toastService.showSuccess('supression confirmé');

  }).catch(err => {
     this.toastService.showError(err);

  })
                    }
                });
            //We can close dialog calling disposable.unsubscribe();
            //If dialog was not closed manually close it by timeout
            setTimeout(()=>{
                disposable.unsubscribe();
            },10000);

}

  updateCategory(key) {
    this.router.navigate(['/categories/updateCategory/', key]);
  }

}

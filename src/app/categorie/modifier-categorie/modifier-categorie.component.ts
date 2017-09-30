/*-------Page ModifierCategorieComponent    -------*/
/*	-page to update a   categorie    ------------ */
/*-----------------------------------------------*/
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.css']
})
export class ModifierCategorieComponent implements OnInit {
  CategorieDetail: any = {};
  key: any;
  categoryObservable: FirebaseObjectObservable<any>;
  Categorie: FormGroup;
  constructor(public  route: ActivatedRoute, public af: AngularFireDatabase,  public toastService : ToastService, vcr: ViewContainerRef,
              public router: Router ) {
     this.toastService.toatsinit(vcr);
    this.route.params.map(params => params['id']).subscribe((Id) => {
      if (Id != null) {
        this.categoryObservable = this.af.object('/categories/' + Id);
        this.categoryObservable.subscribe(
          (response) => {
            this.CategorieDetail = response;
          }
        );
      }
    });
  }


  updateCategorie(ngform: NgForm) {
    if  (this.Categorie.valid){
    this.categoryObservable.update({
      nom: this.CategorieDetail.nom,
      icon: this.CategorieDetail.icon
    }).then(res => {
      this.toastService.showSuccess(`La catégorie ${this.Categorie.value.title} a été modifié `);
    })
.catch(error => {
      this.toastService.showError(error);
    });
   // this.Categorie.reset();
    }
else {
       this.toastService.showwarning('Veuillez remplir tous les champs');
      }
  }

  ngOnInit() {

     this.Categorie = new FormGroup({
      'title': new FormControl(this.CategorieDetail.nom, Validators.required),
      'icon': new FormControl(this.CategorieDetail.icon, Validators.required)
    })
  }

}

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ToastService } from '../../toast.service';



@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  Categorie: FormGroup;
  CategorieRef: FirebaseListObservable<any>;

  constructor(public af: AngularFireDatabase, public toastService : ToastService, vcr: ViewContainerRef) {
    this.toastService.toatsinit(vcr);
    this.CategorieRef = af.list('categories');
  }



  AddCategorie(ngform: NgForm) {
    if  (this.Categorie.valid){
    this.CategorieRef.push({
      nom: this.Categorie.value.title,
      icon: this.Categorie.value.icon
    }).then(res => {
      this.toastService.showSuccess(`La catégorie ${this.Categorie.value.title} a été ajouté `);
      this.Categorie.reset();
    })
.catch(error => {
      this.toastService.showError(error);
    });
   // this.Categorie.reset();
    }
else {
       this.toastService.showwarning('veuillez remplir tous les champs');
      }
  }
  ngOnInit() {
    this.Categorie = new FormGroup({
      'title': new FormControl('', Validators.required),
      'icon': new FormControl('', Validators.required)
    })
  }

}

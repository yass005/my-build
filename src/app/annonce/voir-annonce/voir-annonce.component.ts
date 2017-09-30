
/*-------Page VoirAnnonceComponent    -------*/
/*	-page details annonce   ------------ */
/*-----------------------------------------------*/
import { Toast } from 'ng2-toastr/src/toast';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmComponent } from '../../dialog-service.service';
import { ToastService } from '../../toast.service';


@Component({
  selector: 'app-voir-annonce',
  templateUrl: './voir-annonce.component.html',
  styleUrls: ['./voir-annonce.component.css']
})
export class VoirAnnonceComponent implements OnInit {

  valide: boolean;
  annonce: any = {};
  AnnonceRef: FirebaseObjectObservable<any>;
  constructor(public toastService: ToastService, private dialogService: DialogService,
    public af: AngularFireDatabase, public activatedRoute: ActivatedRoute, public vcr: ViewContainerRef) {

    this.toastService.toatsinit(vcr);
    this.activatedRoute.params.subscribe(val => {
      val.id2 === "Annonces" ? this.valide = true : this.valide = false
      this.AnnonceRef = this.af.object(`${val.id2}/${val.id}`);
      this.AnnonceRef.subscribe(val => {
        console.log(val)
        this.annonce = val;

      });

    })

  }

  ngOnInit() {

  }

// passer l'annonce valider
  valider() {

    let disposable = this.dialogService.addDialog(ConfirmComponent, {
      title: 'Confirmation Annonce',
      message: 'Confirm message'
    })
      .subscribe((isConfirmed) => {
        //We get dialog result
        if (isConfirmed) {
          return this.AnnonceRef.update({ validé: true }).then(res => {
            this.toastService.showSuccess('Annonce confirmer')

          }).catch(err => {
            this.toastService.showError(err);
          })
        }
      });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(() => {
      disposable.unsubscribe();
    }, 5000);

  }
//  supprimer annonce
  suprimmer() {

    let disposable = this.dialogService.addDialog(ConfirmComponent, {
      title: 'Suppression ',
      message:'Êtes-vous sûr de vouloir supprimer définitivement cette annonce ?'
    })
      .subscribe((isConfirmed) => {
        //We get dialog result
        if (isConfirmed) {
          return this.af.object(`userProfile/${this.annonce.userId}/Annonces/${this.annonce.$key}/`).remove().then(() => {
           return this.AnnonceRef.remove().then(ok => {
              this.toastService.showSuccess('Annonce suprimer')
            }
              ).catch(err => {
                this.toastService.showError(err);
              })

          }).catch(err => {
            this.toastService.showError(err);
          })
        }
      });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(() => {
      disposable.unsubscribe();
    }, 5000);

  }
}



/*------- module de base des annonces    -------*/
/*	-page details annonce   ------------ */
/*-----------------------------------------------*/

import { Component, OnInit, Input } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import {Router} from '@angular/router';


@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  @Input() liste: string;

  Annonces: FirebaseListObservable<any>;

public p: any;
titre: string;
  constructor( public af: AngularFireDatabase, public router: Router) {


  }

  ngOnInit() {
      this.Annonces = this.af.list(`/${this.liste}`);
     this.liste==="AnnoncesAValidé" ? this.titre="Validation" : this.titre="Online" ;
  }




  ViewAnnonce(key) {
    this.router.navigate(['/Annonce/annonce', key, this.liste]);
  }

  updateAnnonce(key) {

  }

  deleteAnnonce(key) {

  }



}

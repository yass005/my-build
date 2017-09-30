import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonces-valide',
  templateUrl: './annonces-valide.component.html',
  styleUrls: ['./annonces-valide.component.css']
})
export class AnnoncesValideComponent implements OnInit {


  Annonces: string
  constructor() {

  this.Annonces="Annonces";
  }

  ngOnInit() {


  }

}

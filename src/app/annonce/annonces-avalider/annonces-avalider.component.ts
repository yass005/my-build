import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annonces-avalider',
  templateUrl: './annonces-avalider.component.html',
  styleUrls: ['./annonces-avalider.component.css']
})
export class AnnoncesAValiderComponent implements OnInit {
  Annonces: string
  constructor() {

    this.Annonces="AnnoncesAValidé"
  }

  ngOnInit() {
  }

}

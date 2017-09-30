/*--------------------------- ng2-charts----------------------*/
/*Reactive, responsive, beautiful charts for Angular2       .*/
/*a mock of chart with static content and an other one with */
/* number of annonce in category.                          */
/*--------------------------------------------------------*/

import { Component, OnInit } from '@angular/core';
import { ChartsModule, Color } from 'ng2-charts';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-showstat',
  templateUrl: './showstat.component.html',
  styleUrls: ['./showstat.component.css']
})
export class ShowstatComponent implements OnInit {
  annoncesCount: any[] = [];
  categoryData: FirebaseListObservable<any>;
  doughnutChartLabels: string[]= [];
  doughnutChartData: number[]= [];
  doughnutChartType: string = 'doughnut';
  constructor(public af: AngularFireDatabase) {
    this.categoryData = af.list('/categories');


  }

  ngOnInit() {
    this.categoryData.map(cats => {
      return cats.filter(cat => {
        return !!cat.Annonces
      }).map(cat => {
        return { nom: cat.nom, nbannonces: Object.keys(cat.Annonces).length }
      })
    }).subscribe(val => {
      val.forEach(cat => {
        console.log(cat);
        this.doughnutChartLabels.push(cat.nom)
        this.doughnutChartData.push(cat.nbannonces)
      })
    }, Error => {
      console.log(Error.message)
    })
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
    console.log(this.doughnutChartLabels)
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType: string = 'line';
  public pieChartType: string = 'pie';
}

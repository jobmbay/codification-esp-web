import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-codification',
  templateUrl: './codification.component.html',
  styleUrls: ['./codification.component.css']
})
export class CodificationComponent implements OnInit {

  batiments;
  model={
    rating : 2.3
  }

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.get('Batiments?filter=' + encodeURIComponent('{"order":"etages.numero","include": {"etages": {"chambres":{"positions":{"etudiants":[{"options":"departements"},"cycles","niveau"]}}}}}'))
      .subscribe(
        data=>{
          this.batiments = data;
          this.batiments.charts = [];
          let batimentCharts=[];
          this.batiments.forEach(function (batiment) {
            batiment.nbchambres = 0;
            batiment.etagesCharts = [];
            batiment.etages.forEach(function (etage) {
              batiment.etagesCharts.push(etage.chambres.length);
              batiment.nbchambres += etage.chambres.length;
              etage.chambres.forEach(function (chambre) {
                chambre.affinite = 0;
                if(chambre.positions.length==0)
                {
                  chambre.affinite=-1;
                }
                else
                {
                  chambre.positions.forEach(function (position) {
                    this.dataService.get("")
                  })
                }
              })
            })
            batimentCharts.push({name: batiment.label, y: batiment.nbchambres});
          });
          this.batiments.charts = batimentCharts;
          console.log(this.batiments);
        }
      );
  }

  getElement(event)
  {
    console.log(event.target);
  }

}

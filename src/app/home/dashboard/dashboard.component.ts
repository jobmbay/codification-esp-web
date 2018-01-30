import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user ={};

  exite=false;

  position={
    status:"",
    chambre:{
      numero:0,
      etage:{
        batiment:{
          label:""
        }
      }
    }
  };

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.user = this.dataService.getUser();
    this.dataService.get("Positions?filter=" + encodeURIComponent('{"include":[{"chambre":{"etage":"batiment"}}],"where":{"etudiantId":"'+ this.user["id"] +'"}}'))
      .subscribe(
        data=>{
          if(data.length!=0)
          {
            this.exite=true;
            this.position = data[0];
          }
          else {
            this.exite=false;
          }
        },
        err=>{
          console.log(err)
        }
      );
  }

}

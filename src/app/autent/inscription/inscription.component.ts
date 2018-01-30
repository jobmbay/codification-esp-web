import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-inscription',
  templateUrl: 'inscription.component.html',
  styleUrls: ['inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user = {
    nom:"",
    prenom:"",
    age:0,
    sexe:"Femme",
    telephone:"",
    adresse:"",
    username:"",
    password:"",
    email:"",
    departementId:"",
    optionId:"",
    cycleId:"",
    niveauId:"",
  };

  departements;
  cycles;
  myoptions;
  niveaux;
  allNiveaux;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.get("Departements")
      .subscribe(
        data=> {
          this.departements = data;
        },
        err=> {
          console.log()
        }
      );

    this.dataService.get("Cycles")
      .subscribe(
        data=> {
          this.cycles = data;
        },
        err=> {
          console.log()
        }
      );

    this.dataService.get("Niveaus")
      .subscribe(
        data=> {
          this.niveaux = data;
          this.allNiveaux = data;
        },
        err=> {
          console.log()
        }
      );
  }

  departementChanged()
  {
    this.dataService.get("Departements/" + this.user.departementId + "/options")
      .subscribe(
        data=> {
          this.myoptions = data;
        },
        err=> {
          console.log()
        }
      );
  }

  cycleChanged()
  {
      this.niveaux=[];
      if(this.user.cycleId=="5a6a3e09798b09295d03e318")
      {
        this.niveaux.push(this.allNiveaux[0]);
        this.niveaux.push(this.allNiveaux[1]);
      }
      else
      {
        this.niveaux = this.allNiveaux;
      }
  }

  validate()
  {
    console.log(this.user);
    this.dataService.post("Etudiants", this.user)
      .subscribe(
        data=> {
          console.log(data);
        },
        err=> {
          console.log(err);
        }
      );
  }

  changeSexe()
  {
    alert("sexeeee")
    console.log("sexeeeee",this.user.sexe)
  }

}

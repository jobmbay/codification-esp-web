import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user = {
    nom:"",
    prenom:"",
    age:0,
    sexe:"",
    telephone:"",
    adresse:"",
    username:"",
    password:"",
    email:"",
    departement:"",
    option:"",
    cycle:"",
    niveau:"",
  }

  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  validate()
  {
    this.user = {
      adresse:"Mailka",
      age
  :
    21,
    cycle
      :
      "DIC",
    departement
      :
      "Genie Informatique",
    email
      :
      "ziggyou@gmail.com",
    niveau
      :
      "DIC2",
    nom
      :
      "Lam",
    option
      :
      "Informatique",
    password
      :
      "passer",
    prenom
      :
      "Youssouf",
    sexe
      :
      "",
    telephone
      :
      "772186320",
    username
      :
      "ziggyou"
    }
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

}

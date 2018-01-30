import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {forEach} from "@angular/router/src/utils/collection";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-codification',
  templateUrl: './codification.component.html',
  styleUrls: ['./codification.component.css']
})
export class CodificationComponent implements OnInit {

  batiments;
  exite = false;
  model={
    rating : 2.3
  }

  chambre = {};

  user;
  currentEtudiant = {
    id:"",
    prenom:"",
    nom:"",
    adresse:"",
    cycle:{
      id:"",
      label:""
    },
    niveau:{
      id:"",
      numero:0
    },
    option:{
      id:"",
      label:"",
      departement:{
        id:"",
        label:""
      }
    }
  };
  activeEtage=0;
  activeChambre=0;
  activeBatiment=0;

  constructor(private toasterService: ToasterService, private dataService : DataService) {
    this.toasterService=toasterService;
    let urlToChangeStream = 'https://codification-esp-api.herokuapp.com/api/Positions/change-stream?_format=event-stream';
    let src = new window['EventSource'](urlToChangeStream);
    src.addEventListener('data', function(msg) {
      let data = JSON.parse(msg.data);
      document.getElementById("changeStream").click();
      console.log("realtime",data); // the change object
    });
  }

  ngOnInit() {

    this.user = this.dataService.getUser();
    this.user.sexe="Feminin";
    this.initialisation();
  }

  initialisation()
  {
    this.dataService.get('Batiments?filter=' + encodeURIComponent('{"include": {"etages": {"chambres":{"positions":{"etudiant":[{"option":"departement"},"cycle","niveau"]}}}}}'))
      .subscribe(
        data=>{
          this.batiments = data;
          this.batiments.charts = [];
          let batimentCharts=[];
          let myUser = this.user;
          this.batiments.forEach(function (batiment) {
            batiment.nbchambres = 0;
            batiment.etagesCharts = [];
            batiment.etages.forEach(function (etage, index) {
              batiment.nbchambres += etage.chambres.length;
              etage.chambres.forEach(function (chambre) {
                chambre.affinite = 0;
                if(chambre.positions.length==0)
                {
                  chambre.affinite=2.5;
                }
                else
                {
                  chambre.affinite=0;
                  chambre.positions.forEach(function (position) {
                    if(position.etudiant.option.label==myUser.option.label)
                    {
                      chambre.affinite+=10;
                    }
                    if(position.etudiant.option.departement.label==myUser.option.departement.label)
                    {
                      chambre.affinite+=7;
                    }
                    if(position.etudiant.niveau.numero==myUser.niveau.numero)
                    {
                      chambre.affinite+=5;
                    }
                    if(position.etudiant.cycle.label==myUser.cycle.label)
                    {
                      chambre.affinite+=3;
                    }
                  })
                  chambre.affinite = (chambre.affinite/chambre.nbposition-1)/5;
                }
              })
            })
          });
          this.batiments.charts = batimentCharts;
          console.log(this.batiments);
        }
      );
  }


  reserver()
  {
    document.getElementById("close").click();
    if(this.chambre["positions"].length<this.chambre["nbposition"])
    {
      this.dataService.get("Positions/count?where=" + encodeURIComponent('{"etudiantId":"'+ this.user.id +'"}'))
        .subscribe(
          nbCodef=>{
            if(nbCodef.count==0)
            {
              this.dataService.post("Positions",{numero:this.chambre["positions"].length+1, chambreId: this.chambre["id"], etudiantId: this.user.id, status:"Reservation"})
                .subscribe(
                  data=>{
                    this.toasterService.pop('success', 'Reservation réussite', 'Votre réservation a été bien tenu en compte');
                    this.initialisation();
                  },
                  err=>{
                    console.log(err);
                  }
                );
            }
            else {
              this.toasterService.pop('error', 'Codification impossible', 'Désolé vous vous etes déja codifier, Si la chambre que vous avez ne vous plaisez pas vous pouvez echanger de chambre avec votre téléphone mobile');
            }
          }
        )
    }
    else {
      this.toasterService.pop('error', 'Chambre pleine', 'Désolé la chambre est déja pleine, veuillez chercher une autre chambre');
    }
  }

  getCurrentEtudiant(etudiant)
  {
    this.currentEtudiant = etudiant;
  }

  chooseRoom(room, batiment)
  {
    this.chambre = room;
    this.chambre["batiment"]= batiment.label;
    if(this.chambre["positions"][0])
    {
      this.exite = true;
      this.currentEtudiant = this.chambre["positions"][0].etudiant;
    }
    else
    {
      this.exite = false;
    }
  }

  getElement(event)
  {
    console.log(event.target);
  }

}

import {Component, OnInit, AfterViewInit} from '@angular/core';
import {DataService} from "../../data.service";
import {Router} from "@angular/router";

declare var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  user={
    username:"",
    password:""
  }

  constructor(private router: Router, private dataService : DataService) {

  }

  validerLogin()
  {
    this.dataService.login(this.user)
      .subscribe(
        data =>{
          this.dataService.setTocken(data.id);
          this.dataService.get("Etudiants/"+ data.userId +"?filter=" + encodeURIComponent('{"include":[{"option":"departement"},"cycle","niveau"]}'))
            .subscribe(
              user=>{
                this.dataService.setUser(user);
                this.router.navigate(['/home/dashboard']);
              }
            );
        },
        err =>{
          console.log(err);
        }
      );
  }

  ngOnInit() {
    /*this.dataService.post("Departements", {label : "Informatique"})
      .subscribe(
        data=> console.log(data),
        err => console.log(err)
      );
      */
  }

  ngAfterViewInit()
  {
    /*$(document).ready(function(){
      $('input').iCheck({
        checkboxClass: 'icheckbox_flat-aero',
        radioClass: 'iradio_flat-aero'
      });
    });*/
  }

}

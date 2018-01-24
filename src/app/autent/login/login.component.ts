import {Component, OnInit, AfterViewInit} from '@angular/core';
import {DataService} from "../../data.service";

declare var $ : any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  constructor(private dataService : DataService) {
    let urlToChangeStream = 'https://codification-esp-api.herokuapp.com/api/Departements/change-stream?_format=event-stream';
    let src = new window['EventSource'](urlToChangeStream);
    src.addEventListener('data', function(msg) {
      let data = JSON.parse(msg.data);
      console.log("realtime",data); // the change object
    });
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

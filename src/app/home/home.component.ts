import {Component, OnInit, AfterViewInit} from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

declare var $ : any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  user:any;
  constructor(private router:Router, private dataService:DataService) { }

  ngOnInit() {
    if(!this.dataService.isConnected())
    {
      this.router.navigate(['/authent']);
    }
    else
    {
      this.user = this.dataService.getUser()
    }
  }

  ngAfterViewInit()
  {

  }

  deconnection()
  {
    this.dataService.deconnect();
    this.router.navigate(['/authent']);
  }

}

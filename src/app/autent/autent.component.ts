import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-autent',
  templateUrl: './autent.component.html',
  styleUrls: ['./autent.component.css']
})
export class AutentComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    if(this.dataService.isConnected())
    {
      this.router.navigate(['/home'])
    }
  }

}

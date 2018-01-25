import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  baseUrl = "https://codification-esp-api.herokuapp.com/api/";

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  login(data) {
    return this.http.post(this.baseUrl + "Etudiants/login?include=user", data)
      .map((res:Response) => res.json());
  }

  post(url,data) {
    return this.http.post(this.baseUrl + url, data)
      .map((res:Response) => res.json());
  }

  patch(url,data) {
    return this.http.patch(this.baseUrl + url, data)
      .map((res:Response) => res.json());
  }



  delete(url,id) {
    return this.http.delete(this.baseUrl + url + "/" + id,)
      .map((res:Response) => res.json());
  }

  get(url) {
    return this.http.get(this.baseUrl + url)
      .map((res:Response) => res.json());
  }

  setUser(user)
  {
    let userStringify = JSON.stringify(user);
    localStorage.setItem("userAccount",userStringify);
  }

  getUser()
  {
    return JSON.parse(localStorage.getItem("userAccount"));
  }

  putRel(urlF,urlS,idF,idS) {
    return this.http.put(this.baseUrl + urlF + "/" + idF  + "/" + urlS + "/rel/" + idS, {})
      .map((res:Response) => res.json());
  }

  setTocken(token)
  {
    localStorage.setItem("tocken",token);
  }

  getTocken()
  {
    return localStorage.getItem("tocken");
  }

  isConnected()
  {
    if(localStorage.getItem("tocken"))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  deconnect()
  {
    localStorage.removeItem("tocken");
  }
}

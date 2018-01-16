import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

  baseUrl = 'https://codification-esp-api.herokuapp.com/api/';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http : Http) {

  }

  getData(url){
    return this.http.get(this.baseUrl + url)
      .map((res:Response) => res.json());
  }

  addData(url,data){
    return this.http.post(this.baseUrl + url, JSON.stringify(data), {headers: this.headers})
      //.map((res:Response) => res.json());
  }

  patchData(url,data){
    return this.http.patch(this.baseUrl + url + "/" + data.id, data)
      .map((res:Response) => res.json());
  }

  deleteData(url,dataId){
    return this.http.delete(this.baseUrl + url + "/" + dataId)
      .map((res:Response) => res.json());
  }

}


/* Servico de consumo da API do RapidApi.com */

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class BibleService {

   httpOptions = {

    headers: new HttpHeaders({
      'x-rapidapi-host':  'uncovered-treasure-v1.p.rapidapi.com',
      'x-rapidapi-key': '4a910602f4msh137ccaf8e6d8c9dp1e0681jsnedcfa4a890fc'
    })
  };
  

  constructor (private http: HttpClient) { }
  
  apiUrl = 'https://uncovered-treasure-v1.p.rapidapi.com/random'

public listar(): Observable<any> {
     return  this.http.get(this.apiUrl,this.httpOptions)
};


}

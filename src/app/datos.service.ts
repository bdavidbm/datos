import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient){}

  retornar(){
    return this.http.get("https://www.datos.gov.co/resource/tyhr-3h8y.json")
  }
}

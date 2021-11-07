import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatosService} from './datos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  p: number=7;
  datos: any= null;

  constructor(private datosService: DatosService){}

  ngOnInit(){
    this.datosService.retornar().subscribe(result => this.datos= result)
    /*this.http.get("https://www.datos.gov.co/resource/tyhr-3h8y.json").subscribe(
      result =>{
        this.datos = result;
      },
      error =>{
        console.log('problemas');
      }
    );*/
  }
}

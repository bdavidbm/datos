import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datos: any= null;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get("https://www.datos.gov.co/resource/tyhr-3h8y.json").subscribe(
      result =>{
        this.datos = result;
      },
      error =>{
        console.log('problemas');
      }
    );
  }
}

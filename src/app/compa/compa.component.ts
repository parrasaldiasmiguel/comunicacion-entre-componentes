import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.css']
})
export class CompaComponent  {
nombre:String;
apellido:String;

recibirEvento(e:any){
 this.nombre=e.target.value;
 }

}

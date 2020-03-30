import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zed',
  templateUrl: './zed.component.html',
  styleUrls: ['./zed.component.css']
})
export class ZedComponent implements OnInit {
mensajeKayn:String;
  @Input()
mensaje : string;
  
  constructor() { }

  ngOnInit() {
  }

  recibirEnergia(e :any){
    this.mensajeKayn=e;

  }
}

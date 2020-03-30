import { Component, OnInit,EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-kayn',
  templateUrl: './kayn.component.html',
  styleUrls: ['./kayn.component.css']
})
export class KaynComponent implements OnInit {
@Input()
energy:String;
@Output()
emisor= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  darEnergia(){
  this.emisor.emit('Toma el poder sombrío!!');

 }

}

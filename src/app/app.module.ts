import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';
import { CompcComponent } from './compc/compc.component';
import { ZedComponent } from './zed/zed.component';
import { KaynComponent } from './kayn/kayn.component';

import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CompaComponent,
    CompbComponent,
    CompcComponent,
    ZedComponent,
    KaynComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

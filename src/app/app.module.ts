import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompoAComponent } from './compoa/compoa.component';
import { CompobComponent } from './compob/compob.component';
import { CompocComponent } from './compoc/compoc.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompoAComponent,
    CompobComponent,
    CompocComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

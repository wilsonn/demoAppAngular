import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num1 : number = 0;
  num2 : number = 0;
  rpta : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  recibirTecla(e : any){
    this.num1 = +e.target.value
  }

  recibirTecla2(e : any){
    this.num2 = +e.target.value
  }

  operar(){
    this.rpta = this.num1 + this.num2
  }

}

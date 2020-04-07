import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/Modelo/Empresa';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
empresa:Empresa = new Empresa();
  constructor(private router:Router,private service:ServiceService) { };

  ngOnInit() : void{
    //this.Buscar(this.empresa);
    //this.Buscar();
  }
  /*Buscar(empresa:Empresa){
   localStorage.setItem("ruc",empresa.ruc);
    console.log('ruc : '+empresa.ruc); 
    this.service.getEmpresaRuc(empresa.ruc)
    .subscribe(data=>{
      this.empresa=data
      alert("La razon social es: "+this.empresa.razon_social)
      this.router.navigate(["listar"])
    }) 
  }*/

  Buscar(empresa:Empresa){
    localStorage.setItem("ruc",empresa.ruc);
    console.log('ruc '+empresa.ruc);    
    this.router.navigate(["listar"]);
  }
}

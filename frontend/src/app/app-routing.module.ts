import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComponent } from './Empresa/consultar/consultar.component';
import { ListarComponent } from './Empresa/listar/listar.component';


const routes: Routes = [
  {path:'consultar', component:ConsultarComponent},
  {path:'listar', component:ListarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

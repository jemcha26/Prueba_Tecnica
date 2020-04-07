import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultarComponent } from './Empresa/consultar/consultar.component';
import { ServiceService } from './Service/service.service';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ListarComponent } from './Empresa/listar/listar.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './paginas/home/home.module';
import { CadastroModule } from './paginas/cadastro/cadastro.module';
import { ConsultaModule } from './paginas/consulta/consulta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    CadastroModule,
    ConsultaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

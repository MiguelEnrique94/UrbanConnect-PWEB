import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IncluirReclamacoesComponent } from './components/reclamacoes/incluir-reclamacoes/incluir-reclamacoes.component';
import { IncluirReclamacaoComponent } from './components/reclamacoes/incluir-reclamacao/incluir-reclamacao.component';
import { AtualizarReclamacaoComponent } from './components/reclamacoes/atualizar-reclamacao/atualizar-reclamacao.component';
import { ListarReclamacoesComponent } from './components/reclamacoes/listar-reclamacoes/listar-reclamacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncluirReclamacoesComponent,
    IncluirReclamacaoComponent,
    AtualizarReclamacaoComponent,
    ListarReclamacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InspiracaoComponent } from './inspiracao/inspiracao.component';
import { ProgramacaoComponent } from './programacao/programacao.component';
import { GiftsComponent } from './gifts/gifts.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { FooterComponent } from './footer/footer.component';
import { EventoCardComponent } from './evento-card/evento-card.component';
import { HoverBorderDirective } from './hover-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    InspiracaoComponent,
    ProgramacaoComponent,
    GiftsComponent,
    ParceirosComponent,
    FooterComponent,
    EventoCardComponent,
    HoverBorderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

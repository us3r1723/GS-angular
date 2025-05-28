import { Component, Input } from '@angular/core';
import { Evento } from '../interfaces/evento.interface'; // Caminho correto

@Component({
  selector: 'app-evento-card',
  templateUrl: './evento-card.component.html',
  styleUrls: ['./evento-card.component.css']
})
export class EventoCardComponent {
  @Input() evento!: Evento; // Corrigido de "evento1" para "evento" e adicionado "!"
}

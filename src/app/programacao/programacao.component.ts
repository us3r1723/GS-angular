import { Component } from '@angular/core';
import { Evento } from '../interfaces/evento.interface';

@Component({
  selector: 'app-programacao',
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.css']
})
export class ProgramacaoComponent {
  eventos: Evento[] = [
    { id: 1, titulo: 'Kick-off', data: '26 de maio', horario: '19H00', local: 'ONLINE' },
    { id: 2, titulo: 'Workshop IoT', data: '27 de maio', horario: '14H00', local: 'FIAP Paulista' },
    { id: 3, titulo: 'Palestra IA', data: '28 de maio', horario: '16H00', local: 'FIAP Paulista' }
  ];

  showModal = false;
  eventoSelecionado: string = '';

  participar(eventoTitulo: string): void {
    this.eventoSelecionado = eventoTitulo;
    this.showModal = true;

    // Fecha automaticamente após 3 segundos
    setTimeout(() => {
      this.showModal = false;
    }, 3000);
  }

  closeModal(): void {
    this.showModal = false;
  }
}

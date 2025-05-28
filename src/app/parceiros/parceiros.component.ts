import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent {
  activeIndex = 0;

  parceiros = [
    {
      id: 1,
      nome: 'FIAP',
      logo: 'assets/images/fiap-logo.png', // Recomendo colocar na pasta assets
      alt: 'FIAP - Organizadora do evento',
      descricao: 'Faculdade de Tecnologia da Informação',
      destaque: true
    },
    {
      id: 2,
      nome: 'IBM',
      logo: 'assets/images/ibm-logo.png',
      alt: 'IBM - Parceira tecnológica',
      descricao: 'Soluções em nuvem e IA'
    },
    {
      id: 3,
      nome: 'Microsoft',
      logo: 'assets/images/microsoft-logo.png',
      alt: 'Microsoft - Parceira tecnológica',
      descricao: 'Plataformas e soluções digitais'
    },
    {
      id: 4,
      nome: 'AWS',
      logo: 'assets/images/aws-logo.png',
      alt: 'Amazon Web Services',
      descricao: 'Líder em serviços de nuvem'
    }
  ];

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.parceiros.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.parceiros.length) % this.parceiros.length;
  }

  goTo(index: number) {
    this.activeIndex = index;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent {
  // Lista de parceiros com efeito de hover
  parceiros = [
    {
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      alt: 'Logo da IBM - Parceira do Global Solution',
      nome: 'IBM',
      descricao: 'Soluções em nuvem e inteligência artificial'
    },
    {
      logo: 'https://www.fiap.com.br/wp-content/themes/fiap2016/images/sharing/fiap.png',
      alt: 'Logo da FIAP - Organizadora do Global Solution',
      nome: 'FIAP',
      descricao: 'Faculdade de Tecnologia - Organizadora',
      isOrganizadora: true
    },

  ];
}

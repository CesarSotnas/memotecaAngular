import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes no Angular',
      autoria: 'Dev',
      modelo: 'modelo1',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

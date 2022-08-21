import Fone from './fone';

export default class Pessoa {
  nome: string;
  sobrenome: string;
  fone: Fone;
  constructor(nome: string, sobrenome: string, fone: Fone) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.fone = fone;
  }
  public setPessoa(nome: string, sobrenome: string, fone: Fone) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.fone = fone;
  }
}

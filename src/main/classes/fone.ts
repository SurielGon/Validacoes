export default class Fone {
  digito: string;
  numero: string;
  celular: boolean;

  constructor(digito: string, numero: string, celular: boolean) {
    this.digito = digito;
    this.numero = numero;
    this.celular = celular;
  }

  setFone(digito: string, numero: string, celular: boolean) {
    this.digito = digito;
    this.numero = numero;
    this.celular = celular;
  }
}

import Fone from '../main/classes/fone';
import Pessoa from '../main/classes/pessoa';

describe('Pessoa', () => {
  let pessoa: Pessoa;

  it('Criar pessoa', () => {
    pessoa = new Pessoa('NOME', 'SOBRENOME', new Fone('55', '11223344', false));
    expect(pessoa).toBeDefined();
    expect(pessoa.nome).toBe('NOME');
    expect(pessoa.sobrenome).toBe('SOBRENOME');
  });

  it('Set pessoa', () => {
    pessoa.setPessoa(
      'NOVO_NOME',
      'NOVO_SOBRENOME',
      new Fone('44', '44332211', false)
    );
    expect(pessoa).toBeDefined();
    expect(pessoa.nome).toBe('NOVO_NOME');
    expect(pessoa.sobrenome).toBe('NOVO_SOBRENOME');
  });
});

import Fone from '../main/classes/fone';

describe('Fone', () => {
  let fone: Fone;

  it('Criar fone', () => {
    fone = new Fone('55', '11223344', false);
    expect(fone).toBeDefined();
    expect(fone).toEqual({
      digito: '55',
      numero: '11223344',
      celular: false,
    });
  });

  it('Set fone', () => {
    fone.setFone('44', '44332211', false);
    expect(fone).toEqual({
      digito: '44',
      numero: '44332211',
      celular: false,
    });
  });
});

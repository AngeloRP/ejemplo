import { Modulo2Module } from './modulo2.module';

describe('Modulo2Module', () => {
  let modulo2Module: Modulo2Module;

  beforeEach(() => {
    modulo2Module = new Modulo2Module();
  });

  it('should create an instance', () => {
    expect(modulo2Module).toBeTruthy();
  });
});

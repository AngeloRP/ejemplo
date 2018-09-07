import { Modulo4Module } from './modulo4.module';

describe('Modulo4Module', () => {
  let modulo4Module: Modulo4Module;

  beforeEach(() => {
    modulo4Module = new Modulo4Module();
  });

  it('should create an instance', () => {
    expect(modulo4Module).toBeTruthy();
  });
});

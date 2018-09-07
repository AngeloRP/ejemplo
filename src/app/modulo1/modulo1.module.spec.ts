import { Modulo1Module } from './modulo1.module';

describe('Modulo1Module', () => {
  let modulo1Module: Modulo1Module;

  beforeEach(() => {
    modulo1Module = new Modulo1Module();
  });

  it('should create an instance', () => {
    expect(modulo1Module).toBeTruthy();
  });
});

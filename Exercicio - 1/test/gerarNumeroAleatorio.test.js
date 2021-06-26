const gerarNumeroAleatorio = require('../lib/gerarNumeroAleatorio');
describe('gerarNumeroAleatorio', () => {
      test ('O inicio e o fim do intervalo deve ser um valor negativo',() => {
   const p = new gerarNumeroAleatorio();
   p.gerarNumero([-2,-5,-8,-9,-5,-6]);
   expect(p.num).toBe<0;
   
  
 
    });
});
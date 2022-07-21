import {getSaludo} from '../../base-pruebas/02-template-string';

describe('Prueba template string nombre', ()=>{

    test('getSaludo debe devolver "Hola Alejo"', () => {
        const name = "Alejo";
        const message = getSaludo( name );
        expect(message).toBe(`Hola ${ name }`);
    })
})

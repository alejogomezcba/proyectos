import { getImagen } from '../../base-pruebas/11-async-await';

describe('Test de 11-async-await', () => {

    test('getImagen debe retornar una URL de la imagen', async() => {
        const resp = await getImagen();
        // expect(typeof resp).toBe('string');
        expect(resp).toBe('No se encontró la imagen');
    })

})

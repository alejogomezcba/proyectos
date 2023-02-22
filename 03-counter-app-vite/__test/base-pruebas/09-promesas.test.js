import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';

describe('Testing 09-promesas', () => {
    test('Testing getHeroeByIdAsync debe de retornar un heroe',(done)=> {
        const id = 1;
        getHeroeByIdAsync(id)
        .then( hero => {
            expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
            done();
        });

    });

    test('Testing getHeroeByIdAsync debe obtener error si heroe no existe',(done)=> {
        const id = 100;
        getHeroeByIdAsync(id)
        .catch( error => {

            expect(error).toBe(`No se pudo encontrar el héroe con el id ${id}`);
            done();
        });

    })
})

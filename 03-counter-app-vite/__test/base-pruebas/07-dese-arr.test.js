import { string } from "prop-types";
import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Testing of retornaArreglo´s component", () => {
  test("Should return a number and a string", () => {

    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe('ABC'); // aserción valida que sea igual a ABC
    expect(numbers).toBe(123); // aserción valida que sea igual a 123

    expect(typeof letters).toBe('string'); // aserción valida que el dato sea un string
    expect(typeof numbers).toBe('number'); // aserción valida que el dato sea un número

    expect(letters).toEqual(expect.any(String)); // aserción valida que el dato sea un string


  });
});

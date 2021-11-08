import { retornaArreglo } from "../../base/07-deses-arr";

describe('Pruebas en desestructuración', () => {
    
    test('debe retornar un string y un número', () => {
        const [letras,numeros] = retornaArreglo();
        expect(letras).toEqual("ABC")
        expect(typeof letras).toEqual("string")
        expect(numeros).toEqual(123)
        expect(typeof numeros).toEqual("number")
    })
    

})

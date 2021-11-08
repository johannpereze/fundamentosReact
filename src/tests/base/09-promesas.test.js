import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Prueba con promesas", () => {
  test("getHeroeByIdAsync debe retornar un heroe async", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      console.log(heroe);
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("Debe obtener un error si el hero por ID no existe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((err) => {
    //   console.log(err);
    expect(err).toBe("No se pudo encontrar el héroe")
    //   expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });


});

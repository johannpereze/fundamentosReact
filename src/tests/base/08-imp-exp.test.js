import { getHeroeById } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
  test("Debe de retornar un heroe por id", () => {
    const id = 1;

    const hero = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    console.log(hero);

    expect(hero).toEqual(heroeData);
  });

  test("Debe de retornar undefined si heroe no existe", () => {
    const id = 10;

    const hero = getHeroeById(id);

    console.log(hero);

    expect(hero).toBe(undefined);
  });
});

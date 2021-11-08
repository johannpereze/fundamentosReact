import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
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

  test("Debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";

    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((h) => h.owner === "DC");

    expect(heroes).toEqual(heroesData);
  });

  test("Debe retornar un arreglo con los héroes de Marvel", () => {
    const owner = "Marvel";

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });

  test("Debe retornar array vacío si no existe el owner", () => {
    const owner = "Dark Horse";

    const heroes = getHeroesByOwner(owner);

    console.log(heroes);

    expect(heroes).toEqual([]);
  });
  test("Debe retornar 0 si no existe el owner", () => {
    const owner = "Dark Horse";

    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(0);
  });
});

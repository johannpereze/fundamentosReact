import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test("getsaludo debe retornar hola Sebastian", () => {
    const nombre = "Sebastian";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre);
  });
  test("getsaludo debe retornar hola Carlos si no hay argumento", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos");
  });
});

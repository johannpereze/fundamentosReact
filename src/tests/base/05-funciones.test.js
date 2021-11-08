import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("Debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toStrictEqual(userTest);
  });
  test("getUsuarioActivo debe devolver un objeto con el nombre del argumento", () => {
    const username = "Sebastian";
    const user = {
      uid: "ABC567",
      username,
    };
    const activeUser = getUsuarioActivo(username);
    expect(activeUser).toEqual(user);
  });
});

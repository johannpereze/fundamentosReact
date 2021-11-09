import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas del CounterApp component", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("debería renderizar correctamente el componente haciendo match con el snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debería mostrar el valor por defecto de 100", () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);

    const texto = wrapper.find("h2").text();

    console.log(texto);

    expect(texto).toBe(value.toString());
  });

  test("debe de incrementar el contador con el boton de +1 y ser 11", () => {
    wrapper.find("button").at(0).simulate("click");

    const texto2 = wrapper.find("h2").text();

    console.log(texto2);

    expect(texto2).toBe("11");
  });
  test("debe de decrementar el contador con el boton de -1 y ser 9", () => {
    wrapper.find("button").at(2).simulate("click");

    const texto2 = wrapper.find("h2").text();

    console.log(texto2);

    expect(texto2).toBe("9");
  });
  test("debe de dejar el contador en el valor predeterminado", () => {
    
    const value = 100;

    const wrapper = shallow(<CounterApp value={value} />);

    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");

    const texto2 = wrapper.find("h2").text();

    console.log(texto2);

    expect(texto2).toBe("100");
  });
});
// import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Pruebas en PrimeraApp", () => {
  //test sin enzyme
  // test('Debe mostrar el mensaje "Hola Mundo"', () => {
  //     const saludo = 'Hola Mundo'
  //     const {getByText} = render(<PrimeraApp saludo={saludo} />)
  //     wrapper.getByText()
  //     expect(getByText(saludo)).toBeInTheDocument()
  // })

  //test con enzyme:
  test("Debe de mostrar PrimeraApp correctamente", () => {
    const saludo = "Hola Mundo";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola Mundo";
    const subtitulo = "Hola Mundo";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    const textoParrafo = wrapper.find("p").text();
    expect(textoParrafo).toBe(subtitulo);
  });
});

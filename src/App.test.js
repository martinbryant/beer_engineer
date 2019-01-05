import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

const component = () => shallow(<App />);

describe("App tests", () => {
  it('renders an outer div with the class "root"', () => {
    const expected = component().exists();
    expect(expected).toBe(true);
  });
});

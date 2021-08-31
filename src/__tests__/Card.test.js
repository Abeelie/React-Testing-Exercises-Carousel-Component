import React from "react";
import { render } from "@testing-library/react";
import Card from "../Card";

it("renders without crashing or errors", function() {
  render(<Card />);
});

it("matches with previous snapshot", function() {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});

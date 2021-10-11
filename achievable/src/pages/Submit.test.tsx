import React from "react";
import { render } from "@testing-library/react";
import Submit, { ActivityModal } from "./Submit";

test("submit component renders without crashing", () => {
  const { baseElement } = render(<Submit />);
  expect(baseElement).toBeDefined();
});

test("activity modal component renders without crashing", () => {
  const { baseElement } = render(<ActivityModal />);
  expect(baseElement).toBeDefined();
});

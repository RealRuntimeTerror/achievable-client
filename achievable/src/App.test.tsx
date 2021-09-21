import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Login from "./pages/Login";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

test("app component renders without crashing", () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});
test("login component renders without crashing", () => {
  const { baseElement } = render(<Login />);
  expect(baseElement).toBeDefined();
});
test("profile component renders without crashing", () => {
  const { baseElement } = render(<Tab1 />);
  expect(baseElement).toBeDefined();
});
test("analytics component renders without crashing", () => {
  const { baseElement } = render(<Tab2 />);
  expect(baseElement).toBeDefined();
});
test("group component renders without crashing", () => {
  const { baseElement } = render(<Tab3 />);
  expect(baseElement).toBeDefined();
});

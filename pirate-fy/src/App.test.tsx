import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Pirate-fy button", () => {
  render(<App />);
  const linkElement = screen.getByText(/PIRATE-FY/i);
  expect(linkElement).toBeInTheDocument();
});

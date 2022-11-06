import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const incButton = screen.getByRole("button", {
      name: "Inc",
    });
    expect(incButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders 1 after click inc button", async () => {
    user.setup();
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    const incButton = screen.getByRole("button", {
      name: "Inc",
    });
    await user.click(incButton);
    expect(countElement).toHaveTextContent("1");
  });

  test("set count to amount after clicking set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "30");
    expect(amountInput).toHaveValue(30);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("30");
  });

  test("tab focus in the right order", async () => {
    user.setup();
    render(<Counter />);
    const incButton = screen.getByRole("button", {
      name: "Inc",
    });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.tab();
    expect(incButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});

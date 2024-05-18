import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button Testing", () => {
  test("Should have render properly", () => {
    render(<Button>Button</Button>);
    const button = screen.getByTestId("button");

    expect(button).toBeDefined();
  });
});

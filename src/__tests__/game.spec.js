import { expect, test, describe } from "vitest";
import { getResults } from "../services/game";

describe("getResults", () => {
  test("user wins", () => {
    expect(getResults("rock", "scissors")).toBe("user");
    expect(getResults("paper", "rock")).toBe("user");
    expect(getResults("scissors", "paper")).toBe("user");
  });

  test("computer wins", () => {
    expect(getResults("rock", "paper")).toBe("computer");
    expect(getResults("paper", "scissors")).toBe("computer");
    expect(getResults("scissors", "rock")).toBe("computer");
  });

  test("tie", () => {
    expect(getResults("rock", "rock")).toBe("tie");
    expect(getResults("paper", "paper")).toBe("tie");
    expect(getResults("scissors", "scissors")).toBe("tie");
  });

  test("invalid input", () => {
    expect(getResults("invalid", "rock")).toBe("");
    expect(getResults("rock", "invalid")).toBe("");
  });
});

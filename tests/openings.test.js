import { describe, it, expect } from "vitest";
import openings from "../src/data/openings.js";

describe("Openings Data", () => {
  it("should contain Sicilian Defense", () => {
    const sicilian = openings.find((o) => o.id === "sicilian");
    expect(sicilian).toBeTruthy();
    expect(sicilian.name).toBe("Sicilian Defense");
    expect(sicilian.moves.length).toBeGreaterThan(0);
  });
});

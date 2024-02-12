import { capitalize } from "./index";

describe("utils", () => {
  it("Capitalize", () => {
    expect(capitalize("hello")).toBe("Hello");
  })
})
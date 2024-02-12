import { double, triple } from "./two";

describe("utils", () => {
  it("Double", () => {
    expect(double(4)).toBe(8);
  })
  it("Triple", () => {
    expect(triple(4)).toBe(12);
  })
})
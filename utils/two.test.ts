import { simple, double, triple } from "./two";

describe("utils", () => {
  it("Simple", () => {
    expect(simple(4)).toBe(8);
  })
  it("Double", () => {
    expect(double(4)).toBe(8);
  })
  it("Triple", () => {
    expect(triple(4)).toBe(12);
  })
})
export function sum(...number: number[]): number {
  return number.reduce((total, number) => {
    return total + number;
  }, 0);
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;
  describe("test sum", () => {
    it("return 0 with no number", () => {
      expect(sum(0)).toBe(0);
    });
    it("return same number with one number", () => {
      expect(sum(2)).toBe(2);
    });
    it("return 1,2,3 para to 6", () => {
      expect(sum(1, 2, 3)).toBe(6);
    });
  });
}

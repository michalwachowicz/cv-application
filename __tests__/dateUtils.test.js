import { getMonthsArray, getYearsArray } from "../src/utils/dateUtils";

describe("dateUtils", () => {
  describe("getMonthsArray", () => {
    let array;

    beforeAll(() => {
      array = getMonthsArray();
    });

    it("returns array of length 12", () => expect(array).toHaveLength(12));

    it("returns always the same array reference", () =>
      expect(array).toBe(getMonthsArray()));
  });

  describe("getYearsArray", () => {
    let array;

    beforeAll(() => {
      array = getYearsArray();
    });

    it("returns array of proper length", () => {
      const length = new Date().getFullYear() - 1900;
      expect(array).toHaveLength(length);
    });

    it("contains current and minimum years", () => {
      expect(array).toContain(new Date().getFullYear());
      expect(array).toContain(1901);
    });

    it("returns always the same array reference", () =>
      expect(array).toBe(getYearsArray()));
  });
});

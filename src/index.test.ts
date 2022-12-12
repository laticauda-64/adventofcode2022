import { rawInput } from "./input/rawInput";
import { cleanArrayOfStrings } from ".";
import { calculateRowScore } from ".";

const firstStrategy = `A Y
B X
C Z`;

describe("cleanArrayOfStrings", () => {
   it("should be an array...", () => {
      expect(Array.isArray(cleanArrayOfStrings)).toBe(true);
   });
   it("should contains string", () => {
      expect(typeof cleanArrayOfStrings[0]).toBe("string");
   });
});

describe("calculateRowScore", () => {
   it("should return 8", () => {
      const round = "A Y";
      expect(calculateRowScore(round)).toEqual(8);
   });
   it("should return 1", () => {
      const round = "B X";
      expect(calculateRowScore(round)).toEqual(1);
   });
   it("should return 6", () => {
      const round = "C Z";
      expect(calculateRowScore(round)).toEqual(6);
   });
});

describe("reduce with calculateRowScore should give right result", () => {
   it("should be 15", () => {
      expect(
         ["A Y", "B X", "C Z"].reduce((acc: number, curr: string): number => {
            return calculateRowScore(curr) + acc;
         }, 0)
      ).toEqual(15);
   });
});

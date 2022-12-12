import { rawInput } from "./input/rawInput";
import { cleanArrayOfStrings, findLonelyChar, itemPriorityCost } from ".";
import { divideStringInTwo } from ".";

describe("cleanArrayOfStrings", () => {
   it("should be an array...", () => {
      expect(Array.isArray(cleanArrayOfStrings)).toBe(true);
   });
   it("should contains string", () => {
      expect(typeof cleanArrayOfStrings[0]).toBe("string");
   });
});

describe("divideStringInTwo", () => {
   it("should divide the given string in strings of same length", () => {
      expect(typeof divideStringInTwo("ABCABC")[0]).toBe("string");
      expect(typeof divideStringInTwo("ABCABC")[1]).toBe("string");
      expect(divideStringInTwo("ABCABC")[0].length).toEqual(divideStringInTwo("ABCABC")[1].length);
   });

   it("should throw on even string length", () => {
      expect(() => {
         divideStringInTwo("ABCDE");
      }).toThrow("Every bags should be even !!");
   });
});

describe("findLonelyChar", () => {
   it("should find the character common to both arrays", () => {
      expect(findLonelyChar(["abcde", "efghi"])).toBe("e");
   });

   it("should throw if no common characters", () => {
      expect(() => {
         findLonelyChar(["abcd", "efghi"]);
      }).toThrow();
   });
});

describe("itemPriorityCost", () => {
   it("should return the correct priority number according to item case", () => {
      expect(itemPriorityCost("a")).toBe(1);
      expect(itemPriorityCost("b")).toBe(2);
      expect(itemPriorityCost("c")).toBe(3);
      expect(itemPriorityCost("z")).toBe(26);
      expect(itemPriorityCost("A")).toBe(27);
      expect(itemPriorityCost("B")).toBe(28);
      expect(itemPriorityCost("Z")).toBe(52);
   });
});

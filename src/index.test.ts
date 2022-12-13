import { rawInput } from "./input/rawInput";
import { cleanArrayOfStrings, findCommonChar, itemPriorityCost, getGroupsOfThree } from ".";

describe("cleanArrayOfStrings", () => {
   it("should be an array...", () => {
      expect(Array.isArray(cleanArrayOfStrings)).toBe(true);
   });
   it("should contains string", () => {
      expect(typeof cleanArrayOfStrings[0]).toBe("string");
   });
});

describe("getGroupsOfThree", () => {
   it("should return arrays of 3 strings", () => {
      expect(getGroupsOfThree(cleanArrayOfStrings)[0]).toHaveLength(3);
      expect(getGroupsOfThree(cleanArrayOfStrings)[1]).toHaveLength(3);
      expect(getGroupsOfThree(cleanArrayOfStrings)[2]).toHaveLength(3);
   });
});

describe("findCommonChar", () => {
   it("should find the character common to both arrays", () => {
      expect(findCommonChar(["abcz", "defz", "ghiz"])).toBe("z");
   });

   it("should throw if no common characters", () => {
      expect(() => {
         findCommonChar(["abc", "def", "ghi"]);
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

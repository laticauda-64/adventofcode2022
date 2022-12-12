import { rawInput } from "./input/rawInput";
import { cleanArrayOfStrings } from ".";
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

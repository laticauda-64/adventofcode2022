import { rawInput } from "./input/rawInput";

export const cleanArrayOfStrings: string[] = rawInput.split("\n\n").map((e) => e.split("\n"))[0];

export const divideStringInTwo = (bag: string): string[] => {
   if (bag.length % 2 !== 0) {
      throw new Error("Every bags should be even !!");
   }

   const bagSize: number = bag.length / 2;

   const firstHalf = bag.slice(0, bagSize);
   const secondHalf = bag.slice(bagSize, bag.length);

   return [firstHalf, secondHalf];
};

const finalScore = 0;

console.log(divideStringInTwo("ABCABC"));

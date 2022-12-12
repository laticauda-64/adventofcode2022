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

export const findLonelyChar = (twoCompartmentsBag: string[]): string => {
   for (const letter of twoCompartmentsBag[0]) {
      if (twoCompartmentsBag[1].includes(letter)) return letter;
   }
   throw new Error("Can't find any pair in this bag..." + `\nBag : ${twoCompartmentsBag}`);
};

export const itemPriorityCost = (item: string): number => {
   // Check for Upper or lowercase
   if (item === item.toLowerCase()) {
      return item.charCodeAt(0) - 96;
   }
   return item.charCodeAt(0) - 38;
};

export const reducer = (acc: number, curr: string) => {
   const bag: string[] = divideStringInTwo(curr);
   const lonelyItem: string = findLonelyChar(bag);
   return itemPriorityCost(lonelyItem) + acc;
};

const finalScore: number = cleanArrayOfStrings.reduce(reducer, 0);

console.log(finalScore);

import { rawInput } from "./input/rawInput";

export const cleanArrayOfStrings: string[] = rawInput.split("\n\n").map((e) => e.split("\n"))[0];

export const getGroupsOfThree = (elvesList: string[]): string[][] => {
   const chunkSize = 3;
   const result = [];
   for (let i = 0; i < elvesList.length; i += chunkSize) {
      const chunk = elvesList.slice(i, i + chunkSize);
      result.push(chunk);
   }
   return result;
};

export const findCommonChar = (elvesGroup: string[]): string => {
   for (const letter of elvesGroup[0]) {
      if (elvesGroup[1].includes(letter) && elvesGroup[2].includes(letter)) return letter;
   }
   throw new Error("Can't find any letter matching in each group..." + `\nGroup : ${elvesGroup}`);
};

export const itemPriorityCost = (item: string): number => {
   // Check for Upper or lowercase
   if (item === item.toLowerCase()) {
      return item.charCodeAt(0) - 96;
   }
   return item.charCodeAt(0) - 38;
};

const elvesGrouped = getGroupsOfThree(cleanArrayOfStrings);

export const reducer = (acc: number, curr: string[]) => {
   const commonItem: string = findCommonChar(curr);
   return itemPriorityCost(commonItem) + acc;
};

const finalScore: number = elvesGrouped.reduce(reducer, 0);
console.log(finalScore);

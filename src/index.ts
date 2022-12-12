import { rawInput } from "./input/rawInput";

const cleanArrayOfStrings: string[] = rawInput
   .split("\n\n")
   .map((e) => e.split("\n"))[0]
   .map((e) => e.replace(" ", ""));

const finalScore = 0;

console.log(cleanArrayOfStrings);

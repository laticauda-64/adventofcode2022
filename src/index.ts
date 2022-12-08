import { rawInput } from "./input/rawInput";

const puzzleInput: number[][] = rawInput.split("\n\n").map((e) => e.split("\n").map(Number));

function findTheElf(acc: number[], curr: number[]): number[] {
   let maxValue = 0;
   if (acc.reduce((a, b) => a + b) < curr.reduce((a, b) => a + b)) {
      maxValue = curr.reduce((a, b) => a + b);
   }
   return [maxValue];
}

const fatestElf: number[] = puzzleInput.reduce(findTheElf, [0]);

console.log("The Elf carrying the most calories is the elf number " + fatestElf[0]);

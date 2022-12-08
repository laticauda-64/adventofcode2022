import { rawInput } from "./input/rawInput";

const totalCaloriesList: number[] = rawInput
   .split("\n\n")
   .map((e) => e.split("\n").map(Number))
   .map((e) => e.reduce((a, b) => a + b));

const top1Cal: number = totalCaloriesList.reduce((a, b) => Math.max(a, b), -Infinity);
const top2Cal: number = totalCaloriesList.filter((e) => e !== top1Cal).reduce((a, b) => Math.max(a, b), -Infinity);
const top3Cal: number = totalCaloriesList.filter((e) => e !== top1Cal && e !== top2Cal).reduce((a, b) => Math.max(a, b), -Infinity);

console.log(`Total is : ${top1Cal + top2Cal + top3Cal}`);

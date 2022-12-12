import { rawInput } from "./input/rawInput";

export const cleanArrayOfStrings: string[] = rawInput.split("\n\n").map((e) => e.split("\n"))[0];

export const calculateRowScore = (round: string): number => {
   // Memo
   // ABC for opponent, XYZ current player
   // A,X for Rock, B,Y for Paper, and C,Z for Scissors
   // X = lose, Y = draw, Z = win
   // Score 1 for Rock, 2 for Paper, and 3 for Scissors
   // Score 0 for lost, 3 for draw, and 6 for won

   switch (round) {
      case "A X":
         return 3 + 0;
      case "A Y":
         return 1 + 3;
      case "A Z":
         return 2 + 6;
      case "B X":
         return 1 + 0;
      case "B Y":
         return 2 + 3;
      case "B Z":
         return 3 + 6;
      case "C X":
         return 2 + 0;
      case "C Y":
         return 3 + 3;
      case "C Z":
         return 1 + 6;
      default:
         return 0;
   }
};

const finalScore = cleanArrayOfStrings.reduce((acc: number, curr: string): number => {
   return calculateRowScore(curr) + acc;
}, 0);

console.log(finalScore);

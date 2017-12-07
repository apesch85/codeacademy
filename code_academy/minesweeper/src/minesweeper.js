const blankLine = '  |   |  '
const guessLine = '1 |   |  '
const bombLine = '  | B |  '
const bombBoard = [guessLine, bombLine, blankLine]


console.log('This is what an empty board would look like:')

let count = 0;
while (count < 3) {
  count += 1;
  console.log(blankLine);
}

console.log('This is what a board with a guess and a bomb on it would look like:')
for (var i = 0; i < 3; i++) {
    console.log(bombBoard[i]);
}

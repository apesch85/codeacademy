class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs
    this._numberOfTiles = numberOfRows * numberOfColumns

    this._playerBoard = generatePlayerBoard(numberOfRows, numberOfColumns)
    this._bombBoard = generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs)

  }
}

const generatePlayerBoard = (numberOfRows, numberofColumns) => {

  let board = [];
  for (let row_count = 0; row_count < numberOfRows; row_count ++) {
    row = [];
    for (let col_count = 0; col_count < numberofColumns; col_count ++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {

  let board = [];
  for (let row_count = 0; row_count < numberOfRows; row_count ++) {
    row = [];
    for (let col_count = 0; col_count < numberOfColumns; col_count ++) {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    // The code in your while loop has the potential to place bombs on top of
    // already existing bombs. This will be fixed when you learn about control
    // flow.
    randomRowIndex = Math.floor(Math.random() * numberOfRows);
    randomColIndex = Math.floor(Math.random() * numberOfColumns);

    if (board[randomRowIndex][randomColIndex] !== 'B') {
      board[randomRowIndex][randomColIndex] = 'B';
      numberOfBombsPlaced ++;
    }
};
  return board;
};
const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  let numberOfBombs = 0;
  const neighborOffsets = [
    [-1,-1],[-1,0],[-1,1],[0,-1],
    [0,1],[1,-1],[1,0],[1,1]].forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      const numberOfRows = bombBoard.length;
      const numberOfColumns = bombBoard[0].length;

      if (neighborRowIndex >= 0 && neighborRowIndex <= numberOfRows &&
        neighborColumnIndex >= 0 && neighborColumnIndex <= numberOfColumns) {
          if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
            console.log('bomb near by!c')
            numberOfBombs ++;
          }
        }
    });
    return numberOfBombs
}

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
  if (playerBoard[rowIndex][columnIndex] !== ' ') {
    console.log('This tile has already been flipped!')
    return
  } else if (bombBoard[rowIndex][columnIndex] === 'B') {
      playerBoard[rowIndex][columnIndex] = 'B';
    }
    else {
      playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(bombBoard,
                                                                    rowIndex,
                                                                    columnIndex)

    }
}

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

playerBoard = generatePlayerBoard(3, 4);
bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ')
printBoard(playerBoard)

console.log('Bomb Board: ')
printBoard(bombBoard)

flipTile(playerBoard, bombBoard, 0, 0)

console.log('Updated Player Board: ')
printBoard(playerBoard)

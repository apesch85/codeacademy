export class Board {
   constructor(numberOfRows, numberOfColumns, numberOfBombs) {
     this._numberOfBombs = numberOfBombs;
     this._numberOfTiles = numberOfRows * numberOfColumns;
     this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
     this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
   }

   get playerBoard() {
     return this._playerBoard
   }

   flipTile(rowIndex, columnIndex) {
     if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
       console.log('This tile has already been flipped!')
       return
     } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
       this._playerBoard[rowIndex][columnIndex] = 'B';
     }
     else {
       this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex)
      }
     this._numberOfTiles --;
   }

    getNumberOfNeighborBombs(rowIndex, columnIndex) {
      this._numberOfBombs = 0;
      const neighborOffsets = [
        [-1,-1],[-1,0],[-1,1],[0,-1],
        [0,1],[1,-1],[1,0],[1,1]].forEach(offset => {
          const neighborRowIndex = rowIndex + offset[0];
          const neighborColumnIndex = columnIndex + offset[1];
          const numberOfRows = this._bombBoard.length;
          const numberOfColumns = this._bombBoard[0].length;

          if (neighborRowIndex >= 0 && neighborRowIndex <= numberOfRows &&
            neighborColumnIndex >= 0 && neighborColumnIndex <= numberOfColumns) {
              if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
                this._numberOfBombs ++;
              }
            }
        });
        return this._numberOfBombs
      }
      hasSafeTiles() {
        return (this._numberOfTiles !== this._numberOfBombs)
      }
      print() {
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
      }
      static generatePlayerBoard(numberOfRows, numberofColumns) {

        let board = [];
        for (let row_count = 0; row_count < numberOfRows; row_count ++) {
          let row = [];
          for (let col_count = 0; col_count < numberofColumns; col_count ++) {
            row.push(' ');
          }
          board.push(row);
        }
        return board;
      };
      static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {

        let board = [];
        for (let row_count = 0; row_count < numberOfRows; row_count ++) {
          let row = [];
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
          let randomRowIndex = Math.floor(Math.random() * numberOfRows);
          let randomColIndex = Math.floor(Math.random() * numberOfColumns);

          if (board[randomRowIndex][randomColIndex] !== 'B') {
            board[randomRowIndex][randomColIndex] = 'B';
            numberOfBombsPlaced ++;
          }
      };
        return board;
      };
    }

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

let printBoard = () => {
  console.log('Current Board:')
  console.log(board[0].join(' | '))
  console.log(board[1].join(' | '))
  console.log(board[2].join(' | '))
}

console.log(printBoard())

board[0][1] = '1'
board[2][2] = 'B'

console.log(printBoard())

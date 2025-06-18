// QUEENS PUZZLE
// implement the 8 queens solver 
// find all valid solutions for placing
// queens on chessboard such that none attack each other
// track and print valid solutions
// count how many solutions are found

const SIZE = 8;
let solutions = 0;
const board = Array(SIZE);

function isSafe(column, row) {

    for(let prevCol = 0; prevCol < column; prevCol++) {
        const prevRow = board[prevCol];

        if(
            prevRow === row || // same row
            Math.abs(prevRow - row) === column - prevCol // same diagonal
        ) {
            return false;
        }
    }
    return true;
}

function placeQueen(column = 0) {
    if (column === SIZE) {
        console.log(board.map(x => x + 1)); // print 1 based solution
        solutions++;
        return;
    }

    for(let row = 0; row < SIZE; row++) {
        if (isSafe(column, row)) {
            board[column] = row;
            placeQueen(column + 1);
        }
    }
}

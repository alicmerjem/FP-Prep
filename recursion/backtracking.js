// BACKTRACKING - 8 QUEENS PUZZLE
// a way of solving problems by trying out all possible options
// backtracking is allowed when an option does not work
// often used to find solutions that follow certain rules
// such as placing queens on a chessboard


const SIZE = 8, places = Array(SIZE);

let solutions = 0;

function checkR(col, row) {

  for (let i = 0; i < col; i++)
    if (places[i] === row || Math.abs(places[i] - row) === col - i)
      return false;
  return true;

}

function finder(col = 0) {

  if (col === SIZE) return solutions++;

  for (let row = 0; row < SIZE; row++) {
    if (checkR(col, row)) {
      places[col] = row;
      finder(col + 1);
    }
  }
}


// EXPLANATION
// PROBLEM:
// place 8 queens on an 8 by 8 chessboard so that:
// - no two queens are in the same row, col, or diagonal

// CORE IDEA:
// try placing a queen in one col at a time
// if a placement works, continue to the next col
// if not, backtrack to the previous col and tru a different row

// OUR CODE:
// size 8 is for the chessboard
// places variable stores where each queen goes
// solutions is how many we have found

// function checkR if a queen in this col and row will attack any queen already placed
// it goes through all all the earlier columns and checks:
// - is another queen alr in this row
// - is another queen in the same diagonal
// if there are no conflicitng queens, it returns true

// the finder functions places queens one col at a time
// if we have placed all the queens we have the solution
// try every row in every col
// check if it is a safe spot using the other function
// only go forward if it wont cause issues
// if its safe, place the queen and try again in the next col
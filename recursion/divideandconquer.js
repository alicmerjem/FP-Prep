// DIVIDE AND CONQUER - TOWER OF HANOI
// original problem is divided into two or more smaller,
// independent subproblems of the samr type
// each is solved recursively
// the solutions of the subproblems are then combined to solve the original issue

// example: recursively move disks between pegs, solving smaller subproblems

function hanoi(disks, from, to, extra) {
    if (disks === 1) {
        console.log(`Move disk from ${from} to ${to}`);
    } else {
        hanoi(disks - 1, from, extra, to);
        console.log(`Move disk from ${from} to ${to}`);
        hanoi(disks - 1, extra, to, from);
    }
};

// EXPLANATION
// what is the tower of hanoi?
// you have 3 pegs (A, B and C)
// you have n disks of different sizes
// they are stacked on peg A, largest of all at the bottom
// goal: move entire stack from peg A to peg C following the 3 rules:
// 1 - only one disk can be moved at a time
// 2 - you an only move the top disk of a stack
// 3 - you cannot place a larger disk on top of a smaller one

// OUR STRATEGY
// move n disks from A to C:
// 1 - move (n - 1) disks from A to B using C as a helper
// 2 - move the biggest disk from A to C
// 3 - move the (n - 1) disks from B to C using A as a helper
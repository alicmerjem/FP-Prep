// TASK 3
// create a function announce(who, action) that returns "who is action"
// then write function partialWho(who) that partially applies
// the who arguments using arrows functions and
// returns a new function waiting for action

// original functions
function annonuce(who, action) {
    return `${who} is ${action}`;
}

// there we go
function partialWho(who) {
    return (action) => announce(who, action);
}
// write a pure function increaseScore which 
// updates the score of a player object by a fixed amount

const increaseScore = (player, amount) => {
    return {
        name: player.name,
        score: player.score + amount
    };
};
// you are given the template object to process a list of test scores:
/**
 * const ScoreProcessor = (scores) => ({
 * filterPassing: function(),
 * bosstScores: function(),
 * calculateAverage: function(),
 * log: function()
 * })
 */

// fill in each method using chaining
// filter scores >= 50
// add 5 to each remaining score
// compute and log the average

const ScoreProcessor = (scores) => {
  let _scores = scores;

  return {
    filterPassing: function () {
      _scores = _scores.filter(score => score >= 50);
      return this;
    },
    boostScores: function () {
      _scores = _scores.map(score => score + 5);
      return this;
    },
    calculateAverage: function () {
      const avg = _scores.reduce((a, b) => a + b, 0) / _scores.length;
      console.log("Average Score:", avg.toFixed(2));
      return this;
    },
    log: function () {
      console.log(_scores);
      return this;
    }
  };
};

// example usage
ScoreProcessor([42, 78, 55, 90, 33])
    .filterPassing()
    .boostScores()
    .log()
    .calculateAverage();
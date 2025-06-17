// TASK 5
// you atr given a template object to handle a list of task
// durations in minutes:

/**
 * const TimeTracker = (times) => ({
  filterLong: function (),
  convertToHours: function (), 
  totalTime: function (), 
  log: function () 
});
 */

// fill in each method using chaining to:
// filter durations greater than 30 mins
// convert remaining durations to hours
// sum the values and log the result


const TimeTracker = (times) => {
  let _times = times;

  return {

    sayHi: function () {
      console.log("Hi from TimeTracker!");
      return this;
    },

    filterLong: function () {
      _times = _times.filter(t => t > 30);
      return this;
    },
    
    convertToHours: function () {
      _times = _times.map(t => t / 60);
      return this;
    },
    
    totalTime: function () {
      const total = _times.reduce((sum, val) => sum + val, 0);
      console.log("Total Hours:", total);
      return this;
    },
    
    log: function () {
      console.log(_times);
      return this;
    }
  };
};

TimeTracker([45, 20, 90, 15, 60])
  .filterLong()
  .convertToHours()
  .log()
  .totalTime();
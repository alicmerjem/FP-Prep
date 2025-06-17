// TAP AND TEE FUNCTIONS
// used for debugging pipelines w/o modifying them
// insert between functions to intermediate results

const tee = x => (console.log(x), x);
const tap = fn => x => (fn(x), x);

const pipelineDebug = pipeline(
    getDir,
    tap(files => console.log("Files: "), files),
    filterOdt,
    tap(filtered => console.log("Filtered ODTs: ", filtered)),
    count
);

// WHY USE? its hard to check out whats wrong with the data without stopping it or changing the flow
// tee takes value x, logs it and returns the same x so the pipeline keeps working
// tap is like a custom version of tee, it returns a function that accepts x, runs the custom function like a log and returns the original x untouched

// explanation of the pipelineDebug function
// getDir gets a list of files
// tap logs files
// filerOdt filters only .odt
// then tap logs filtered list
// and count counts how many there are left


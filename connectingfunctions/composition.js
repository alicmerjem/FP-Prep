// COMPOSITION
// applying funtions in order right to left
// so f(g(x)) is written as compose(f, g(x))

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
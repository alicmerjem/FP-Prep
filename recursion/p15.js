// CONTINUATION PASSING STYLE

 function factC(n, cont) {
    if (n === 0) {
        return cont(1);
    } else {
        return factC(n - 1, x => cont(n * x));
    }
 }
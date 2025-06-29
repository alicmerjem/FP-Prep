// ARITHMETIC EXPRESSION EVALUATOR
// write a parser that evaluates arithmetic expressions using 
// mutually recursive expression()
// term() and factor()

function evaluate(expr) {
    let curr = 0;

    const tokens = tokenize(expr);

    function tokenize(str) {
        return str
            .replace(/\s+/g, "")
            .split("")
            .map(ch => /\d/.test(ch) ? Number(ch) : ch);
    }

    function peek() {
        return tokens[curr];
    }

    function consume() {
        return tokens[curr++];
    }

    function expression() {
        let result = term();

        while(peek() === "+" || peek() === "-") {
            const op = consume();
            const next = term();
            result = op === '+' ? result + next : result - next;
        }
        return result;
    }
    function term() {
    let result = factor();
    while (peek() === '*' || peek() === '/' || peek() === '%') {
      const op = consume();
      const next = factor();
      if (op === '*') result *= next;
      if (op === '/') result /= next;
      if (op === '%') result %= next;
    }
    return result;
  }

  function factor() {
    const token = consume();

    if (typeof token === "number") {
      return token;
    } else if (token === '-') {
      return -factor(); // unary minus
    } else if (token === '(') {
      const value = expression();
      if (consume() !== ')') {
        throw new Error("Expected closing parenthesis");
      }
      return value;
    } else {
      throw new Error("Unexpected token: " + token);
    }
  }

  return expression();
}


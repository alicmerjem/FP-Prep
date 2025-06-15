// practical currying example
// suppose you had a function that calculated the value added tax VAT for an amount
// if you had to apply a single, constant rate, you could curry the addVAT() function to
// produce a more specialized version that always applied your given rate

const addVAT = (rate, amount) => amount * (1 + rate / 100);
const addVATCurried = (rate) => (amount) => amount * (1 + rate / 100);

const addNationalVAT = addVATCurried(6);
addNationalVAT(1500); // 1590
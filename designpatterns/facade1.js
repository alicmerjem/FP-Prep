// you are working with a legacy payment processor
// it requires transaction data in a strict format:
// legcyProcess(amount, currency, accountId)
// implement a facade function processTransaction(cleanData)
// that prepares data in a unified format for use with legacy function

function processTransaction(cleanData) {
    console.log("Processing clean input", cleanData);

    const amount = cleanData.payment.value;
    const currency = cleanData.payment.unit;
    const accountId = cleanData.id;

    console.log(`Calling legacyProcess(${amount}, "${currency}", "${accountId}")`);
    legacyProcess(amount, currency, accountId);  console.log(`Calling legacyProcess(${amount}, "${currency}", "${accountId}")`);
    legacyProcess(amount, currency, accountId);
}

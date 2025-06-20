// wrap a hard to use date formatting library 

function legacyFormat(dateObj) {
    return `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`;

}

// facade
export const formatDate = (date) => {
    if (!(date instanceof Date)) {
        throw new Error("Excpected a Date object");
    }

    const [day, month, year] = legacyFormat(date).split("-");
    const dd = day.padStart(2, "0");
    const mm = month.padStart(2, "0");

    return `${dd}-${mm}-${year}`;
}
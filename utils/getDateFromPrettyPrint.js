// new Date() does not accept date suffixes like 21st, 3rd, 5th, etc
// We need to remove it first before processing it back as a date
const getDateFromPrettyPrint = prettyDate => {
    const dateWithooutSuffix = prettyDate.replace(/\d+\w+/, s => parseInt(s, 10));
    return new Date(dateWithooutSuffix);
}

module.exports = getDateFromPrettyPrint;
// new Date() does not accept date suffixes like 21st, 3rd, 5th, etc
// We need to remove it first before processing it back as a date
const getDateFromPrettyPrint = prettyDate => {
    const date = prettyDate.split(' ');
    date[1] = parseInt(date[1]);
    return new Date(date.join(' '));
}

module.exports = getDateFromPrettyPrint;
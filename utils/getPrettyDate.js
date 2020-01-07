// applies simple rules to get the suffix for any  given day
function getDaySuffix(num) {
  if (Number(num) > 10 && Number(num) < 20) return 'th';
  
  const lastNum = String(num).slice(-1);
  if (lastNum === "1") return 'st';
  if (lastNum === "2") return 'nd';
  if (lastNum === "3") return 'rd';
  return 'th';
}

// replacement for human-date
// one less dependency and I get to avoid ISO date problems.
function getPrettyDate(str, includeDay = true) {
  // removing dashes to protect against ISO UTC date formatting
  const date = new Date(str.split("-").join(" "));
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York"
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  const dateWithSuffix = formattedDate.replace(/\d+/, num => num + getDaySuffix(num));
  console.log('dateWithSuffix: ', dateWithSuffix)
  if (includeDay) return dateWithSuffix;
  // remove the day at the beginning
  return dateWithSuffix.replace(/\w+,\s/, '');
}

module.exports = getPrettyDate
const path = require("path");
const getPrettyDate = require("../../../utils/getPrettyDate");
const getFiles = require("../../../utils/getFiles");
const getDateFromPrettyPrint = require("../../../utils/getDateFromPrettyPrint");

const options = {
  rootPath: path.join(process.cwd(), "/data/reads/"),
  excludeFiles: ["index.js"],
  mutateFunc(recentRead) {
    const readAt = getPrettyDate(recentRead.readAt, false);
    const createdAt = getPrettyDate(recentRead.createdAt, false);

    return {
      ...recentRead,
      readAt,
      createdAt
    };
  },
  sortFunc(a, b) {
    const aDate = getDateFromPrettyPrint(a.readAt);
    const bDate = getDateFromPrettyPrint(b.readAt);
    return bDate - aDate;
  }
};

module.exports = getFiles(options);

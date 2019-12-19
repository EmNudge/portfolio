const path = require("path");
const hdate = require("human-date");
const getFiles = require("../../../utils/getFiles");
const getDateFromPrettyPrint = require("../../../utils/getDateFromPrettyPrint")

const options = {
  rootPath: path.join(process.cwd(), "/data/reads/"),
  excludeFiles: ["index.js"],
  mutateFunc(recentRead) {
    const readAt = hdate.prettyPrint(recentRead.readAt);
    const createdAt = hdate.prettyPrint(recentRead.createdAt);

    return {
      ...recentRead,
      readAt,
      createdAt,
    }
  },
  sortFunc(a, b) {
    const aDate = getDateFromPrettyPrint(a.readAt)
    const bDate = getDateFromPrettyPrint(b.readAt)
    return bDate - aDate;
  }
};

module.exports = getFiles(options);

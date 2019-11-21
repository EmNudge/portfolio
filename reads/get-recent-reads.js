const path = require("path");
const hdate = require("human-date");
const getFiles = require("../utils/getFiles");

const options = {
  rootPath: path.join(process.cwd(), "/data/reads/"),
  mutateFunc(recentRead) {
    const readAt = hdate.prettyPrint(recentRead.readAt);
    const createdAt = hdate.prettyPrint(recentRead.createdAt);

    return {
      ...recentRead,
      readAt,
      createdAt,
    }
  },
  sort: (a, b) => new Date(b.readAt) - new Date(a.readAt)
};

module.exports = getFiles(options);

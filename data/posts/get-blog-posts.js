const path = require("path");
const hdate = require("human-date");
const getFiles = require("../../utils/getFiles");

const options = {
  rootPath: path.join(process.cwd(), "/pages/blog/"),
  extension: ".mdx",
  mutateFunc: (post, contents, fileName) => {
    // getting read time by calculating article words length / 275 WPM (average reading speed)
    const lastExport = /(export default)(.|\s)+?(\n+\)|;|<\/Layout>\n)/;
    const lastExpCapture = contents.match(lastExport);
    const article = contents
      .slice(lastExpCapture.index + lastExpCapture[0].length)
      .trim();
    const readTime = Math.ceil(article.split(" ").length / 275);

    // getting the prettier version of the date supplied
    const publishedAt = hdate.prettyPrint(post.publishedAt);

    const path = "/blog/" + fileName.replace(/\.mdx?$/, "");

    return {
      ...post,
      readTime,
      publishedAt,
      path
    };
  },
  filterFunc: post => post.published,
  sortFunc: (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
};

module.exports = getFiles(options);

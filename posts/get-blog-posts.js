// This file's code is run before Next touches anything
// It is Node.js code that returns
const fs = require("fs");
const path = require("path");
const hdate = require("human-date");

const DIR = path.join(process.cwd(), "/pages/blog/");
const META = /export\s+const\s+meta\s+=\s+({[\s\S]*?\n})/;
const lastExport = /(export default)(.|\s)+?(\n+\)|;|<\/Layout>\n)/;
const files = fs
  .readdirSync(DIR)
  .filter(file => file.endsWith(".md") || file.endsWith(".mdx"));

module.exports = files
  .map((file, index) => {
    const name = path.join(DIR, file);
    const contents = fs.readFileSync(name, "utf-8");

    // error handling
    const match = META.exec(contents);
    if (!match || typeof match[1] !== "string") {
      throw new Error(`${name} needs to export const meta = {}`);
    }

    // getting read time by calculating article words length / 275 WPM (average reading speed)
    const lastExpCapture = contents.match(lastExport);
    const article = contents
      .slice(lastExpCapture.index + lastExpCapture[0].length)
      .trim();
    const readTime = Math.ceil(article.split(" ").length / 275);

    // eslint-disable-next-line no-eval
    const meta = eval("(" + match[1] + ")");
    const publishedAt = hdate.prettyPrint(meta.publishedAt);

    return {
      ...meta,
      publishedAt,
      path: "/blog/" + file.replace(/\.mdx?$/, ""),
      index,
      readTime
    };
  })
  .filter(meta => meta.published)
  .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

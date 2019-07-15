// This file's code is run before Next touches anything
// It is Node.js code that returns
const fs = require("fs");
const path = require("path");

const DIR = path.join(process.cwd(), "/data/projects/");
const META = /export\s+const\s+meta\s+=\s+({[\s\S]*?\n})/;
const files = fs.readdirSync(DIR).filter(file => file.endsWith(".js"));

module.exports = files
  .map((file, index) => {
    const name = path.join(DIR, file);
    const contents = fs.readFileSync(name, "utf-8");

    // error handling
    const match = META.exec(contents);
    if (!match || typeof match[1] !== "string") {
      throw new Error(`${name} needs to export const meta = {}`);
    }

    // eslint-disable-next-line no-eval
    const meta = eval("(" + match[1] + ")");
    const image = "/static/projects/" + meta.image;

    return {
      ...meta,
      image,
      index
    };
  })
  .filter(meta => meta.isReady);

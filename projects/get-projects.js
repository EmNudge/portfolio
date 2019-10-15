// This file's code is run before Next touches anything
// It is Node.js code that returns
const fs = require("fs");
const path = require("path");

const DIR = path.join(process.cwd(), "/data/projects/");
const META = /export\s+const\s+meta\s+=\s+({[\s\S]*?\n})/;
const files = fs.readdirSync(DIR).filter(file => file.endsWith(".js"));

function getBgCSS() {
  const randAng = () => Math.floor(Math.random() * 360);
  const hueAdjust = Math.floor(Math.random() * 360);
  const angles = Array(8).fill().map(_ => randAng());
  const cols = Array(8).fill().map(_ => Array(3).fill().map(_ => randAng()));

  let str = ``;
  for (const [index, angle] of angles.entries()) {
    const opacity = Math.floor(Math.random() * 10) / 100;
    const colors = cols[index];
    str += `linear-gradient(
      ${angle}deg,
      rgba(${colors[0]}, ${colors[0]}, ${colors[0]}, ${opacity}) 0%, 
      rgba(${colors[0]}, ${colors[0]}, ${colors[0]}, ${opacity}) 33%, 
      rgba(${colors[1]}, ${colors[1]}, ${colors[1]}, ${opacity}) 33%, 
      rgba(${colors[1]}, ${colors[1]}, ${colors[1]}, ${opacity}) 66%, 
      rgba(${colors[2]}, ${colors[2]}, ${colors[2]}, ${opacity}) 66%, 
      rgba(${colors[2]}, ${colors[2]}, ${colors[2]}, ${opacity}) 100%
    ),`
  }

  return str + `
  linear-gradient(
    ${randAng()}deg, 
    hsl(${hueAdjust}, 77%, 52%),
    hsl(${hueAdjust}, 91%, 49%)
  )`
}

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

    return {
      ...meta,
      background: getBgCSS(),
      index
    };
  })
  .filter(meta => meta.isReady);

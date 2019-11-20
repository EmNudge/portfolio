const path = require("path");
const getFiles = require("../utils/getFiles");

function getBgCSS() {
  const randAng = () => Math.floor(Math.random() * 360);
  const hueAdjust = Math.floor(Math.random() * 360);
  const angles = Array(8)
    .fill()
    .map(_ => randAng());
  const cols = Array(8)
    .fill()
    .map(_ =>
      Array(3)
        .fill()
        .map(_ => randAng())
    );

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
    ),`;
  }

  return `${str}
  linear-gradient(
    ${randAng()}deg, 
    hsl(${hueAdjust}, 77%, 52%),
    hsl(${hueAdjust}, 91%, 49%)
  )`;
}

const options = {
  rootPath: path.join(process.cwd(), "/data/projects/"),
  filterFunc: project => project.isReady,
  mutateFunc: project => ({ ...project, background: getBgCSS() })
};

module.exports = getFiles(options);

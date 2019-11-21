const projects = require("./get-projects.js");

const tagsWithDups = projects
  .map(project => project.tags)
  .reduce((accum, curr) => [...accum, ...curr], []);

const tagsNoDups = Array.from(new Set(tagsWithDups));

module.exports = tagsNoDups;

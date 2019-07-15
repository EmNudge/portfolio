const projects = require("./get-projects.js");

const tagsWithDups = projects.map(project => project.tags).flat();

const tagsNoDups = Array.from(new Set(tagsWithDups));

module.exports = tagsNoDups;

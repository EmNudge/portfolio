import preval from "babel-plugin-preval/macro";

const projects = preval`
  module.exports = require('./get-projects.js');
`;

const tags = preval`
  module.exports = require('./get-tags.js');
`;

module.exports = {projects, tags};

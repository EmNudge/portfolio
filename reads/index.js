import preval from "babel-plugin-preval/macro";

const recentReads = preval`
  module.exports = require('./get-recent-reads.js');
`;

module.exports = recentReads;

import preval from 'babel-plugin-preval/macro';

const posts = preval`
  module.exports = require('./get-blog-posts.js');
`;

console.log(posts)

module.exports = posts;
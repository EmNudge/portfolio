# Personal Portfolio

This is the repo for https://kipperman.co, my portfolio.

In hindsight, I would have liked to use Gatsby for this project as it fits the use-case much better. I used Next as a learning experience.

Unfortunately, I have to use `preval` (a really nice package) instead of any 1st party libraries when doing things like using the filesystem as a DB in regards to projects, blog posts, and recent reads.

Next.js also has given me issues with hot reloading, where changes would only be reflected once I restarted the server.

# Useful Parts

I came up with a basic system to scrape the file system for material. The function is in `utils/getFiles.js` and it is used for all scenarios where I am using the filesystem as a data store.

enjoy looking through the code regardless. Do not use it as an example of how to structure your own projects. This could have been done better.
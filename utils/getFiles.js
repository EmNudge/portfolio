const fs = require("fs");
const path = require("path");

module.exports = function getFiles(options) {
  // structure of the object
  const { rootPath, extension, sortFunc, filterFunc, mutateFunc } = options;

  const META = /export\s+const\s+meta\s+=\s+({[\s\S]*?\n})/;

  // gets custom extension or default
  const files = fs
    .readdirSync(rootPath)
    .filter(file =>
      extension != undefined ? file.endsWith(extension) : file.endsWith(".js")
    );

  const data = files.map((file, index) => {
    const name = path.join(rootPath, file);
    const contents = fs.readFileSync(name, "utf-8");

    // error handling
    const match = META.exec(contents);
    if (!match || typeof match[1] !== "string") {
      throw new Error(`${name} needs to export const meta = {}`);
    }

    // eslint-disable-next-line no-eval
    const evaledData = eval("(" + match[1] + ")");

    // mutate it if the option was defined
    const meta = mutateFunc
      ? mutateFunc(evaledData, contents, file)
      : evaledData;

    return {
      ...meta,
      index
    };
  });

  // if caller wants to sort, sort
  if (sortFunc) data.sort(sortFunc);

  // return a filtered or non-filtered version
  return filterFunc ? data.filter(filterFunc) : data;
};

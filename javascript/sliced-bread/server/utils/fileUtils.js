const {resolve} =require ("path");
const fs = require('fs');
const dataFolder = "../data";

exports.storeData = (data, path) => {
  try {
    const filePath = resolve(dataFolder, path);

    fs.writeFileSync(filePath, JSON.stringify(data))

    return filePath;
  } catch (err) {
    console.error(err)
  }
}

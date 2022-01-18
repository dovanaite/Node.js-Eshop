//funkcija, kuri gali perskaityti vieną failą

const fs = require("fs/promises");
const path = require("path");

// console.log(path);
// console.log(__dirname);
// console.log(__filename);

async function readFile(fileName) {
    try {
        const dataPath = path.join(__dirname, "../data/" + fileName + ".json");
        const content = await fs.readFile(dataPath, "utf-8");
        return content;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = readFile;
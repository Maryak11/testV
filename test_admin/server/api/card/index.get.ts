import fs from "fs";
import { fileURLToPath } from "url";
import yaml from "js-yaml";
import path from "path";

export default defineEventHandler(async (event) => {
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const filePath = path.join(__dirname, "..", "..", "card.yml");

    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = yaml.load(fileContents);
    const jsonData = JSON.stringify(data, null, 2);
    return jsonData;
  } catch (e) {
    console.log({ e });
  }
});

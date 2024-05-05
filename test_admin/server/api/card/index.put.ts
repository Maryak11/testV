import fs from "fs";
import yaml from "js-yaml";
import { readBody } from "h3";
import path from "path";
import { fileURLToPath } from "url";

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event);

    const yamlStr = yaml.dump(JSON.parse(data));

    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const filePath = path.join(__dirname, "..", "..", "card.yml");

    fs.writeFileSync(filePath, yamlStr, "utf8");

    console.log("YAML файл успешно обновлен!");
  } catch (e) {
    console.error("Ошибка при обновлении YAML файла:", e);
  }
});

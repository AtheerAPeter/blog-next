import fs from "fs";
import path, { parse } from "path";
export default (req, res) => {
  const {
    query: { id },
  } = req;
  const dataFile = fs.readFileSync(
    path.join(process.cwd(), "file.json"),
    "utf-8"
  );

  // JSON.parse to get itback to json then JSON.stringify to git t back to text for sending

  const result = JSON.parse(dataFile).articles.filter((item) => item.id == id);
  res.end(JSON.stringify(result[0]));
};

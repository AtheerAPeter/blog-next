// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";
export default (req, res) => {
  res.statusCode = 200;

  const dataFile = fs.readFileSync(path.join(process.cwd(), "file.json"));
  res.json(dataFile);
};

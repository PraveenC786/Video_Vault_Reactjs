import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dbPath = path.join(process.cwd(), "api", "db.json");
  const db = JSON.parse(fs.readFileSync(dbPath));

  if (req.method === "GET") {
    return res.status(200).json(db.videos);
  }

  res.status(405).json({ message: "Method Not Allowed" });
}

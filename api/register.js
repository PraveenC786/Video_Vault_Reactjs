import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dbPath = path.join(process.cwd(), "api", "db.json");
  const db = JSON.parse(fs.readFileSync(dbPath));

  if (req.method === "POST") {
    const newUser = req.body;

    db.registered_users.push({
      id: Date.now(),
      ...newUser
    });

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    return res.status(201).json({ message: "Registered Successfully" });
  }

  res.status(405).json({ message: "Method Not Allowed" });
}

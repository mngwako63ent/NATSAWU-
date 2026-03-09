import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("feedback.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    business_name TEXT,
    learning_experience TEXT,
    business_impact TEXT,
    highlight TEXT,
    improvement TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/submit", (req, res) => {
    const {
      fullName,
      email,
      phone,
      businessName,
      learningExperience,
      businessImpact,
      highlight,
      improvement,
    } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ error: "Full Name and Email are required." });
    }

    try {
      const stmt = db.prepare(`
        INSERT INTO responses (
          full_name, email, phone, business_name, 
          learning_experience, business_impact, highlight, improvement
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(
        fullName,
        email,
        phone || null,
        businessName || null,
        learningExperience,
        businessImpact,
        highlight,
        improvement
      );
      res.json({ success: true });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to save response." });
    }
  });

  // Simple admin view to export CSV
  app.get("/api/export", (req, res) => {
    try {
      const rows = db.prepare("SELECT * FROM responses ORDER BY created_at DESC").all();
      if (rows.length === 0) {
        return res.send("No responses yet.");
      }

      const headers = Object.keys(rows[0]).join(",");
      const csv = rows.map((row: any) => 
        Object.values(row).map(val => `"${String(val).replace(/"/g, '""')}"`).join(",")
      ).join("\n");

      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=responses.csv");
      res.send(`${headers}\n${csv}`);
    } catch (error) {
      console.error("Export error:", error);
      res.status(500).send("Failed to export data.");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

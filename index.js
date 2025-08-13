require("dotenv").config();
const express = require("express");
const path = require("path")
const { ConnectDB, closeDB } = require("./config/db.js");
const port = process.env.PORT || 8000;

const app = express();

// Connect to DB before starting server
ConnectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));



app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" , title : "Home page" });
});

// close db
process.on("SIGINT", async () => {
  await closeDB();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await closeDB();
  process.exit(0);
});

app.listen(port, () => {
  console.log(`✅ Server is running on port: ${port}`);
});

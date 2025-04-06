const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Working...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
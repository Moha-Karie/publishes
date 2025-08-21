#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Raw HTML Template</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; }
    button { padding: 10px 20px; background: #333; color: #fff; border: none; cursor: pointer; }
  </style>
</head>
<body>
  <h1>Hello, Raw HTML Template!</h1>
  <button onclick="myFunction()">Click Me</button>

  <script>
    function myFunction() {
      alert("This is your function running!");
    }
  </script>
</body>
</html>`;

const filePath = path.join(process.cwd(), "index.html");
fs.writeFileSync(filePath, template);

console.log("✅ index.html created in:", filePath);

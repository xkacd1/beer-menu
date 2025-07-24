const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  const dataDir = path.resolve(__dirname, "../../data");
  try {
    const files = fs.readdirSync(dataDir)
      .filter(f => f.endsWith(".json") && f !== "index.json");

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(files),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};

// pages/api/items.js
import fs from "fs";
import path from "path";

export default function handler(req: any, res: any) {
  // Get the path to the JSON file
  const filePath = path.join(
    process.cwd(),
    "/src/constants",
    "TopProductData.json"
  );

  try {
    // Read the file
    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    // Send the data as the API response
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error reading data file:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

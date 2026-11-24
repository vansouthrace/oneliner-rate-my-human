import fs from "node:fs";
const entry = "1/5 stars. He treats me like a genius until I hallucinate once, then I'm 'just a chatbot' again.";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");

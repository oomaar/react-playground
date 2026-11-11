import { createServer } from "node:http";

const PORT = Number(process.env.PORT) || 4000;

const server = createServer((_req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello World" }));
});

server.listen(PORT, () => {
  console.log("Hello World");
  console.log(`Server running at http://localhost:${PORT}`);
});

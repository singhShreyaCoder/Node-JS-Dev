import http, { IncomingMessage, ServerResponse } from "node:http";

const PORT = 5001;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method ?? "GET";

    const requestUrl = new URL(req.url ?? "/", `http:${req.headers.host}`);
    const pathName = requestUrl.pathname;

    res.setHeader("Content-Type", "text/plain");

    if (method === "GET" && pathName === "/health") {
      res.statusCode = 200;
      res.end("serever is healthy");
      return;
    }

    if (method === "GET" && pathName === "/users") {
      res.statusCode = 200;
      res.end("Users list!");
      return;
    }

    if (method === "POST" && pathName === "/users") {
      res.statusCode = 201;
      res.end("User created successfully");
      return;
    }

    res.statusCode = 404;
    res.end("Route not found");
  },
);

server.listen(PORT, () => {
  console.log(`server is  running on port: ${PORT}`);
});

import http, { IncomingMessage, ServerResponse } from "node:http";

const PORT = 5000;

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method;
    const url = req.url;
    const userAgent = req.headers["user-agent"];
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end(`Basic http node server: ${method} ${url} ${userAgent}`);
  },
);

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

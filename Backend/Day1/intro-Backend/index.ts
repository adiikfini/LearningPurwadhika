import http, { request } from "http";

const PORT = 3000;

const server = http.createServer((request,response) => {
    if(request.url === "/api" && request.method === "GET") {
        response.writeHead(200);
        response.write("Wecome to my API");
        response.end();
    } else if (request.url === "/users" && request.method === "GET") {
        const users = [
            {id: 1, name: "John Doe"},
            {id: 2, name: "Jane Smith"},
            {id: 3, name: "Alice Johnson"}
        ];
        response.writeHead(200);
        response.write(JSON.stringify(users));
        response.end();
    }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


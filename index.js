// Import json-server
const jsonServer = require("json-server");

// Create a server app
const server = jsonServer.create();

// Generate a middleware to use in json server
const middleware = jsonServer.defaults();

// Set up route/path for json file
const router = jsonServer.router("db.json");

// Set up port number to run server app
const port = 3000 || process.env.PORT;

// Use a middleware and router to the server app
server.use(middleware);
server.use(router);

// To listen / run server in specified port
server.listen(port, () => {
   console.log(`Contact server app started at port ${port}`);
});

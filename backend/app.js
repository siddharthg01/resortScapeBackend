import express from 'express';

// Create an express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a port
const PORT = 3000;

// Root GET route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// New GET route with query parameter
app.get("/greet", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`Hello, ${name}!`);
});

// POST route that echoes back the received JSON
app.post("/echo", (req, res) => {
  const data = req.body;
  res.json({
    message: "Received data successfully",
    data: data
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

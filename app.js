const express = require('express');
const app = express();
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

// Create HTTP server and attach Socket.io
const server = http.createServer(app);
const io = socketio(server);

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Handle WebSocket connections
io.on("connection", (socket) => {
    console.log(`New user connected: ${socket.id}`);
    
    // Listen for location data from clients
    socket.on("send-location", (data) => {
        // Broadcast the location data to all connected clients
        io.emit("receive-location", { id: socket.id, ...data });
    });

    // Handle client disconnection
    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
        // Notify all clients about the disconnection
        io.emit("user-disconnected", socket.id);
    });
});

// Handle the root route and render the index.ejs view
app.get("/", (req, res) => {
    res.render("index");
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

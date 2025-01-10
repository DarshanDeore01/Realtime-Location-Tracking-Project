const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            // Emit location to the server
            socket.emit("send-location", { latitude, longitude });

            // Center the map on the user's location
            if (!markers[socket.id]) {
                map.setView([latitude, longitude], 50);
                markers[socket.id] = L.marker([latitude, longitude]).addTo(map);
            } else {
                markers[socket.id].setLatLng([latitude, longitude]);
            }
        },
        (error) => {
            console.error("Error accessing location:", error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        }
    );
}

// Initialize the map
const map = L.map("map").setView([0, 0], 2);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Darshan Dilip Deore",
}).addTo(map);

// Store markers for all users
const markers = {};

// Receive location updates from other users
socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;

    if (id !== socket.id) {
        if (markers[id]) {
            // Update existing marker for other users
            markers[id].setLatLng([latitude, longitude]);
        } else {
            // Add a new marker for other users
            markers[id] = L.marker([latitude, longitude]).addTo(map);
        }
    }
});

// Remove marker when a user disconnects
socket.on("user-disconnected", (id) => {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});

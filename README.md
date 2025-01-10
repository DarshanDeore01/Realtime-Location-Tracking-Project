# Realtime Tracking App

A real-time geolocation tracking application built with **Node.js**, **Express**, **Socket.IO**, and **Leaflet.js**. The app allows users to share their live locations, view other users' locations on a map, and get notified when users connect or disconnect.

---

## Features
- **Real-time Geolocation Sharing**: Tracks users' live locations using the browser's Geolocation API.
- **Interactive Map**: Displays user locations on a map with markers using Leaflet.js.
- **WebSocket Communication**: Implements real-time updates using Socket.IO.
- **User Notifications**: Alerts when users connect or disconnect.

---

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript, Leaflet.js
- **Backend**: Node.js, Express, Socket.IO
- **View Engine**: EJS

---

## Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14 or later)
- **npm** (comes with Node.js)

---

## Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-username/realtime-tracking-app.git
cd realtime-tracking-app
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Server
```bash
node app.js
```

### Step 4: Open the App in a Browser
Go to [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure
```plaintext
.
├── app.js              # Main server file
├── views
│   └── index.ejs       # Frontend view (template)
├── public
│   ├── css
│   │   └── style.css   # Custom styles
│   └── js
│       └── script.js   # Frontend logic
└── package.json        # Node.js dependencies
```

---

## Usage
1. **Start the server** using `node app.js`.
2. **Allow location access** in your browser when prompted.
3. Open the app in multiple browser tabs or devices to test real-time location sharing.
4. View live updates of your location and other users' locations on the map.

---

## How It Works
### Backend (Node.js + Socket.IO):
- **Socket.IO** establishes WebSocket connections to handle real-time communication.
- Each client emits their geolocation data to the server.
- The server broadcasts the location data to all connected clients.
- When a client disconnects, the server notifies others to remove the corresponding marker.

### Frontend (Leaflet.js + Geolocation API):
- The **Geolocation API** retrieves the user's live location.
- **Leaflet.js** renders an interactive map and updates markers in real-time.

---

## API Endpoints
| Method | Route  | Description               |
|--------|--------|---------------------------|
| GET    | `/`    | Renders the homepage view |

---

## Dependencies
- **Express**: Web framework for Node.js
- **Socket.IO**: Real-time WebSocket communication
- **EJS**: View engine for templating
- **Leaflet.js**: Interactive maps

---

## Demo
1. Launch the app by navigating to `http://localhost:3000`.
2. Share the app link with others on the same network to view their live locations.

---

## Screenshots
### Map Interface
A clean and interactive map interface:

### 1. Main Interface
![Main Interface](./public/Screenshot%202025-01-10%20115825.png)

### 2. Example Screenshot 1
![Screenshot 1](./public/Screenshot%202025-01-10%20120514.png)

### 3. Example Screenshot 2
![Screenshot 2](./public/Screenshot%202025-01-10%20120523.png)

### 4. Example Screenshot 3
![Screenshot 3](./public/Screenshot%202025-01-10%20120549.png)

### 5. Example Screenshot 4
![Screenshot 4](./public/Screenshot%202025-01-10%20120604.png)

### 6. Example Screenshot 5
![Screenshot 5](./public/Screenshot%202025-01-10%20120623.png)

## Future Improvements
- Add authentication for user sessions.
- Store location history in a database.
- Implement clustering for large-scale tracking.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- **[Leaflet.js](https://leafletjs.com/)** for the map library.
- **[Socket.IO](https://socket.io/)** for real-time communication.

---

## Author
**Darshan Dilip Deore**  
Feel free to reach out on [GitHub](https://github.com/DarshanDeore01).

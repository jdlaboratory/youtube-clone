import "./db.js";
import "./models/Video.js";
import app from "./server.js"

const PORT = 4000;

// Run a server
const handleListening = () => console.log(`✅ MORGAN::Server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening); // request

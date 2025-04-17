const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS so frontend can talk to backend
app.use(cors());

app.get('/', (req, res) => {
  res.send('Travique backend is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const ejs = require('ejs'); // Import EJS
const mapRoutes = require("./routes/map.js");
app.set('view engine', 'ejs');
app.use(express.static(__dirname));


// Import your Mongoose model
const model = require('./model'); 

// Connect to your MongoDB database
const mongoURI = 'mongodb://localhost:27017/REVA';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Handle connection errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(mapRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

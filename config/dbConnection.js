const mongoose = require('mongoose');

// Connect to your MongoDB database
const mongoURI = 'mongodb://localhost:27017/REVA';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Handle connection errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


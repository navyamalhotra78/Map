const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const ejs = require('ejs'); // Import EJS
app.set('view engine', 'ejs');
// Serve static files (CSS and JavaScript) from the root directory
// Serve static files (CSS and JavaScript) from the root directory
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

app.get('/', (req, res) => {
    res.render('map'); 
  });
  
// Define a route for handling state pages
app.get('/statePage/:stateName', async (req, res) => {
    const stateName = req.params.stateName;

    try {
        // Retrieve data for the given stateName from your MongoDB database
        const stateData = await model.findOne({ stateName });

        if (stateData) {
            // Render the single 'statePage.ejs' template with the 'stateData' for the specific state
            res.render('statePage', { stateData });
        } else {
            // Handle the case where the state is not found in your database
            res.status(404).send('State not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});



// Other routes and middleware can be defined as needed

// Start your web server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

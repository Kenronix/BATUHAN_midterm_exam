const express = require('express');
const app = express();
const port = 3000;

// Define the /test route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Kenneth James I. Batuhan' });
});

//Start the server on port
app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`);
});
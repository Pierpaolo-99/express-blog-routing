const express = require('express');
const app = express();
const port = 3004;

// Import routes
const postsRoute = require('./routers/postsRoute')

// Listen to port
app.listen(port, () => {
    console.log(`Server running on port:${port}`);
})

// Home route
app.get('/', (req,res) => {
    res.send('Welcome to home Blog!')
})

// middleware
app.use('/api/v1/posts', postsRoute);

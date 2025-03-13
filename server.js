const express = require('express');
const app = express();
const port = 3004;

app.listen(port, () => {
    console.log(`Server running on port:${port}`);
})

// Home route
app.get('/', (req,res) => {
    res.send('Welcome to home Blog!')
})


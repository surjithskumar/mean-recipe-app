// Load .env file contents into process.env by default
require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./DB/connection')
const router = require('./Router/router');

const ffserver = express();

// Middleware
ffserver.use(cors());
ffserver.use(express.json());
ffserver.use(router);

// Use process.env.PORT if available, else default to 4000
const PORT = 4000 || process.env.PORT;

// Start the server
ffserver.listen(PORT, () => {
    console.log(`Flavour-Fusion Server started running at PORT: ${PORT} ...waiting for the client request`);
});

ffserver.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red>Recipe World Started running</h1>`)
})
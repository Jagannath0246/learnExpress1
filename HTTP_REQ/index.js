import express from 'express';
// import path from 'path';
// const path = require('path'); // Importing path module to handle file paths
// import about from './about.html'; // Assuming you have an about.js file for the about route
const app = express();
const PORT = 3000;

app.get('/',(req,res) =>{
    res.send('<h1>Hello World!</h1>');
});

app.get('/about',(req,res) =>{
    res.sendFile('/home/jms/Desktop/JS/nodeJS/3.2 HTTP REQ/about.html'); // Serve the about.html file
});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} .`);
});
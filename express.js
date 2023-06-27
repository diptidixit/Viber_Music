// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;

// const home = fs.readFileSync('signup.html');
// const about = fs.readFileSync('about.html');

// const server = http.createServer((req, res) => {
//     let url = req.url;
//     console.log(url);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     if(url=='/'){
//         res.end(home);
//     }
//     else if(url=='/about'){
//         res.end(about);
//     }
//     else{
//         res.statusCode=404;
//         res.end("<h1>404 Page not found</h1>")
//     }
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req,res) =>{
    let url = req.url;
    console.log(url);
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/playlist', (req,res) =>{
    res.sendFile(path.join(__dirname,'playlist.html'));
})
app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname,'login.html'));
})
app.get('/signup', (req,res) =>{
    res.sendFile(path.join(__dirname,'signup.html'));
})
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})

const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.get('/',(req,res)=>{

    res.sendFile(__dirname + '/views/index.html');
})


app.get('/api/whoami',(req,res)=>{

    console.log(req.ipInfo)
    res.send({ipaddress:req.headers.host.split(':')[0],language:req.headers["accept-language"],software:req.headers['user-agent']})
})
app.use((req, res) => {
    res.send("404 Page not found");
})
app.listen(PORT,()=>{
    console.log("app is running on Port No" + PORT)
})

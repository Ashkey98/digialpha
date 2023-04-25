const express = require("express");
const app = require('./server').expressApp ;
const server = require('./server').httServer;
const user = require('./routes/userRoutes');
const PORT = 3000 ;

app.use(express.json());
require('./config/database')

app.get('/api/healthcheck',(req,res)=>{
    res.status(200).json({"message":"goodluck coming to you"});
});

app.use("/api/v1", user);


server.listen(PORT, () => {
    console.log(`Server is Working on http://localhost:${PORT}`)
  })

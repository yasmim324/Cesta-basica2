const express = require("express");
const server = express();
const mongoose = require("mongoose");

server.use(express.json());

mongoose.connect("mongodb://localhost:27017/Trabalho B2",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const router =  require("./router");
server.use(router);
server.listen(3333); 
const express = require("express");
var bodyParser = require("body-parser")
const app = express();
const port = 3001

// function middleware(req,res,next){
//        console.log("Counter: ", req.headers.counter);
//        next();
// }

// app.use(middleware);
app.use(bodyParser.json())
function handleFunction(req,res){

           console.log(req.body);
           var counter = req.body.counter;

    //    var counter = req.query.counter;
       res.send(counter);
}

function htmlPage(req,res){
     res.send(`<head>
    <title>
        News - Portal
    </title>
</head>
<body>
    <b>
        Hi There
    </b>
</body>`)
}

// app.get("/", htmlPage)

  
function started(){
    console.log("Express running")
}

app.listen(port, started);
// const express = require("express");
// var bodyParser = require("body-parser")
// const app = express();
// const port = 3001

// function middleware(req,res,next){
//        console.log("Counter: ", req.headers.counter);
//        next();
// }

// // app.use(middleware);
// app.use(bodyParser.json())
// function handleFunction(req,res){

//            console.log(req.body);
//            var counter = req.body.counter;

//    var counter = req.query.counter;
//        res.send(counter);
// }

// function htmlPage(req,res){
//      res.send(`<head>
//     <title>
//         News - Portal
//     </title>
// </head>
// <body>
//     <b>
//         Hi There
//     </b>
// </body>`)
// }

// app.get("/", htmlPage)


// function started(){
//     console.log("Express running")
// }

// app.listen(port, started);

//NetNinja

// const http = require("http");
// const fs = require("fs");


// const server = http.createServer((req,res) => {
//     console.log(req.url, req.method);
//     // res.setHeader("content-type", "text/plain");
//     // res.write("Hello Ninjas")
//     // res.end();
//     let path = "./";

//     switch(req.url){
//         case "/": 
//                path += "index1.html";
//                break;
//         case "/about":
//                path += "about.html";
//                break;
//         default :
//                path += "404.html";
//                break;       
//     }
//     fs.readFile(path, (err,data) => {
//         if(err){
//             console.log(err.message);
//             res.end();
//         }else{
//             res.write(data);
//             res.end();
//         }
//     })
// })

// server.listen(3000, "localhost", () => {
//     console.log("Listening to req on 3000")
// })

//NetNinja

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");



const blogsRoutes = require("./Routes/UserRoutes")

const app = express();

app.use(cors({
  origin: "https://news-portal-jzcd.onrender.com"
}));

const dbURI = "mongodb+srv://Dewa0000:Dewa%400000@news-portal.lviixrc.mongodb.net/newsportal?retryWrites=true&w=majority";

// Connect to DB and start server
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


  })
  .catch(err => console.error("MongoDB connection error:", err.message));

// Middleware to log requests
app.use((req, res, next) => {
  console.log("Request received");
  console.log("Host:", req.hostname);
  console.log("Path:", req.path);
  console.log("Method:", req.method);
  next();
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(blogsRoutes);
app.post("/add-blog", (req, res) => {
  console.log(req.body);
})

app.get("/", (req, res) => {
  res.sendFile("./index1.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

// 404 fallback (optional)
app.use((req, res) => {
  res.status(404).sendFile("./404.html", { root: __dirname });
});


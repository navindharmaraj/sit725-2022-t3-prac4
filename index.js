var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var cors = require('cors');
var path = __dirname + '/views';

const MongoClient = require('mongoDb').MongoClient
const uri = "mongodb+srv://dbuser666:sit725DataUser@cluster0.q6kyg.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const projectCollection =(collectionName)=>{
    console.log(collectionName)
    client.connect((err,db)=>{
        projectCollection = client.db().collection(collectionName);
        if(!err){
            console.log('Mongo DB COnnected');

        }
        else{
            console.log("DB Error : ", err);
            process.exit(1)
        }
    });
}
//Services
var calculation = require("./services/calculation");
var car = require("./services/car");
app.use(express.static('assests'));
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }))
router.get("/", function (req, res) {
    res.sendFile(path + "/index.html");
});




app.use("/", router);
app.get("/addTwoNumbers", calculation.addition)//Function to add 2 numbers
app.post("/addition", calculation.n_addition)//Function to add n numbers
app.post("/subTwoNumbers", calculation.subtraction)//Function to subtract 2 numbers
app.put("/updateArray", calculation.updateArray)//Function to subtract 2 numbers
app.delete("/deleteArray", calculation.deleteArray)//Function to subtract 2 numbers
app.get('/api/projects',car.getCarCollection)
app.post('/api/projects',car.addCollection)
// app.post('/api/projects', (req, res) => {
//     console.log("New Project added",req.body);
//     var newProject =req.body;
//     insertprojects(newProject,(err,result)=> {
//         if(err){
//             res.json({statusCode:400, message: err})
//         }
//         else{
//             res.json({statusCode:200, message:'Project Successfully Added', data:result})
//         }
//     });
// })
app.listen(3000, function () {
    console.log("Live at Port 3000");
});
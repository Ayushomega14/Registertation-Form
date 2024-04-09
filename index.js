var express = require('express'); 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json())
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

mongoose.connect('mongodb://localhost:27017/registrationDB',);
var db=mongoose.connection;
db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post('/signup', (req, res) => {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var dateOfBirth = req.body.dateOfBirth;
    var gender = req.body.gender;
    var phoneNumber = req.body.phoneNumber;
    var Email = req.body.Email;
    var password = req.body.password;
    var linkedinProfileURL = req.body.linkedinProfileURL;
    var githubProfileURL = req.body.githubProfileURL;

    var data = {
        "firstName": firstName,
        "lastName": lastName,
        "dateOfBirth": dateOfBirth,
        "gender": gender,
        "phoneNumber": phoneNumber,
        "Email": Email,
        "password": password,
        "linkedinProfileURL": linkedinProfileURL,
        "githubProfileURL": githubProfileURL
    };

    db.collection('users').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record inserted Successfully");
    });
    return res.redirect('ss.html');
});

app.get("/",(req, res) => {
    res.set({
        "Allow-access-Allow-Origin": "*"
    })
    return res.redirect('index.html');
}).listen(3000);

console.log("Listening on port 3000");
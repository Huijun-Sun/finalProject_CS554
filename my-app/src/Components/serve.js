var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
const data = require('../userData');
const userData = data.users;

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
//const data = {"id":"273d7bb6-6a3c-4e75-8b3d-a0df1887f5df","name":"Zehui","email":"zzhao56@stevens.edu","password":"zzh1996"}

app.post('/createUser', function (req, res) {
    const userInfo = req.body;
    console.dir(userInfo);
    userData.addUser( userInfo.name, userInfo.email, userInfo.password);
    //userData.addUser("273d7bb6-6a3c-4e75-8b3d-a0df1887f5df", "Zehui", "zzhao56@stevens.edu","zzh1996");
});

app.post('/findUser', async function (req, res) {
    const userInfo = req.body;
    console.dir(userInfo.name);
    console.dir(userInfo.password);
    let userArray = await userData.getUser( userInfo.name, userInfo.password).then((result)=>{console.log(result);res.json(result)})
});

app.listen(4000);
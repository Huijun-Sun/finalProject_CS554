const bluebird = require('bluebird');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
const data = require('../userData');
const userData = data.users;
const redis = require('redis');
const client = redis.createClient();


var nodemailer = require('nodemailer');
var {google} =require('googleapis');

const CLIENT_ID='171376662647-ktnn6vmmrmpi50jdb9j2qo7mm9r71cqg.apps.googleusercontent.com';
const CLIENT_SECRET='Atv2s0ZkBKzgUYAhqj0LOjnR';
const REDIRECT_URL='https://developers.google.com/oauthplayground';
const REFRESH_TOKEN='1//04e-CaP1uCmyzCgYIARAAGAQSNwF-L9Ir4VY2NTZLhI3i3JVsuWkq5WlLkkp_2QxhYmGEcEyleAGkWjyA9Ht6VjAgniCNBUwnAF8';

const oAuth2Client=new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URL);
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});



bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
//const data = {"id":"273d7bb6-6a3c-4e75-8b3d-a0df1887f5df","name":"Zehui","email":"zzhao56@stevens.edu","password":"zzh1996"}

app.post('/createUser', function (req, res) {
    const userInfo = req.body;
    console.dir(userInfo);
    if(userInfo.name == '') throw "Username cannot be null";
    if(userInfo.email== '') throw "User email cannot be null";
    if(userInfo.password == '') throw "User password cannot be null";
    var loginDate = new Date();
    var loginTime = loginDate.toLocaleString();
    client.setAsync(loginTime,userInfo.name);
    userData.addUser( userInfo.name, userInfo.email, userInfo.password);
    //userData.addUser("273d7bb6-6a3c-4e75-8b3d-a0df1887f5df", "Zehui", "zzhao56@stevens.edu","zzh1996");

    async function sendMail(userEMail){
        try{
            const accessToken=await oAuth2Client.getAccessToken();
    
            const transport=nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type:'OAuth2',
                    user:'nodemailertesterforcs554@gmail.com',
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                }
            });
    
            const mailOptions={
                from: 'Sender <nodemailertesterforcs554@gmail.com>',
                to: userEMail,
                subject: "Sign Up Information of LoL Universe",
                text: "Sign Up Successfully!"
            }
    
            const result= await transport.sendMail(mailOptions);
    
            return result;
        }catch(error){
            return error;
        }
    }

    sendMail(userInfo.email).then((result)=> console.log("Email sent...", result)).catch((error)=>console.log(error.message));

});

app.post('/findUser', async function (req, res) {
    const userInfo = req.body;
    console.dir(userInfo.name);
    console.dir(userInfo.password);
    var loginDate = new Date();
    var loginTime = loginDate.toLocaleString();
    client.setAsync(loginTime,userInfo.name);
    let userArray = await userData.getUser( userInfo.name, userInfo.password).then((result)=>{console.log(result);res.json(result)})
});

app.post('/findComment', async function (req, res) {
    const userInfo = req.body;
    let userArray = await userData.getAllComment().then((result)=>{console.log(result);res.json(result)})
});

app.post('/addComment', async function (req, res) {
    const userInfo = req.body;
    if(userInfo.title == ''){ throw "title cannot be null";}
    // if(!userInfo.content == ''){ throw "content cannot be null";}
    let Array = await userData.addComment(userInfo);
    res.json(Array);
});

app.post('/addL', async function (req, res) {
    const userInfo = req.body;
    let Array = await userData.UpdateAllLike(userInfo).then((result)=>{console.log(result);res.json(result)});
});
app.post('/favor', async function (req, res) {
    const userInfo = req.body;
    let Array = await userData.GetAllLike().then((result)=>{console.log(result);res.json(result)});
});
app.post('/addD', async function (req, res) {
    const userInfo = req.body;
    let Array = await userData.UpdateAllDislike(userInfo).then((result)=>{console.log(result);res.json(result)});
});
app.listen(4000);
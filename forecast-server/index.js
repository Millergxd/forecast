var app = require('express')();
var http = require('http').Server(app);

require('dotenv').config()

var io = require('socket.io')(http,{
  secure: true,
  rejectUnauthorized: false,
  path:'/api/socket.io'
});

var redis = require('redis');
var client = redis.createClient(6379);

let tool =require('./save_data')

app.get('/api', function(req, res){
  res.send('Hello World!');
});

client.on('connect', function() {
  console.log('Redis client connected');
  tool.saveRedisData(client)
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

io.on('connection', function(socket){
  console.log('an user connected')
  const doSomething = () =>{
    let promises=[]
    for (let i = 0; i < 6; i++) {
      promises[i] = tool.doRequest(client, `city:${i}`)
    }
    Promise.all([...promises]).then(vals=> {
      socket.emit("new_forecast",vals)
    })
  }
  doSomething()
  setInterval(()=>{
    doSomething()
  },10000)
});

http.listen(process.env.PORT, function(){
  console.log(`listening on ${process.env.PORT}`);
});

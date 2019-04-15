const fs = require('fs')
const fetch = require('node-fetch');
const messageError = 'How unfortunate! The API Request Failed'

module.exports ={
  saveRedisData: (client) => {
    let rawdata = fs.readFileSync(process.env.DATA_INITIAL);  
    let citys = JSON.parse(rawdata);  
    for(city in citys){
      client.hmset(
        city, 
        "name", 
        citys[city].name, 
        "latitude",
        citys[city].latitude, 
        "longitude", 
        citys[city].longitude
      )
    }
  },

  doRequest: (client, city) => {
    return new Promise(function tryFetch(resolve, reject){
      client.hgetall(city, (err, obj)=>{
        fetch(`${process.env.API_URL}${obj.latitude},${obj.longitude}?units=si`)
        .then(res =>{
          if (Math.random(0, 1) < 0.1) throw new Error(messageError)
          if(res.ok) resolve(res.json())
        })
        .catch(error=> {
          console.log("catch")
          if(error.message === messageError){
            client.hmset('api.errors', +new Date(), error.message)
            tryFetch(resolve, reject)
          }else{
            tryFetch(resolve, reject)
          }
        })
      })
    })
  }
  

}
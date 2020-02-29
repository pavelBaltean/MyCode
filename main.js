
const request = require('request');
const mysql=require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mybase",
  password: "root"
});

connection.connect(function(err){
  if (err) {
    return console.error("Error: " + err.message);
  }
  else{
    console.log("Database is connected");
  }
});

const user=[3];


//start req
function reqOnLink(url,res){
  request.get({url : url,time : true},function(err, response){
    let data=[url,response.elapsedTime,response.statusCode,response.statusMessage];
    res(data);
  });
}


reqOnLink('https://nodejs.dev/making-http-requests-with-nodejs',function(location){
  console.log(location);
  user=[location[0],location[1],location[2],location[3]];
});
//end req

const sql="INSERT INTO websites (url,statusCode,statusMessage,responseTime) VALUES (?,?,?,?)";

connection.query(sql, user, function(err, results) {
    if(err) console.log(err);
    else console.log("Data added");
});

connection.query("SELECT * FROM websites",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные
    //console.log(fields); // мета-данные полей (хз зачем нужны)
});

// close connection
connection.end(function(err) {
  if (err) {
    return console.log("Error: " + err.message);
  }
  console.log("Connection is closed");
});









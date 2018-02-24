var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "tde289ida",
        database: "burgers_db"
    }
);

connection.connect(function(err){
    if(err){
        console.error("Error connecting: " + err.stack);
    }
    console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;
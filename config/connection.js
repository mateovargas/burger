var mysql = require('mysql');

if(process.env.JAWSDB_URL){
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    var connection = mysql.createConnection(
        {
            host: "localhost",
            user: "root",
            password: "tde289ida",
            database: "burgers_db"
        }
    );
}

connection.connect(function(err){
    if(err){
        console.error("Error connecting: " + err.stack);
    }
    console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;
var connection = require('./connection.js');


function printQuestionMarks(length){
    var questionMarks = [];

    for(var i = 0; i < length; i++){
        questionMarks.push("?");
    }

    return questionMarks.toString();
}
var orm = {
    selectAll: function(tableInput, callBack){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result){
            if(err) throw err;
            console.log(result);
            callBack(result);
        });
    },
    insertOne: function(tableInput, cols, vals, callBack){
        var queryString = "INSERT INTO" + table;

        queryString = queryString +  " (" + cols.toString() + ") ";
        queryString = queryString + "VALUES (" + printQuestionMarks(vals.length) + ") ";

        console.log(quertyString);

        connection.query(queryString, vals, function(err, result){
            if(err) throw err;
            callBack(result);
        });
        
    },
    delete: function(tableInput, condition, callBack)


};




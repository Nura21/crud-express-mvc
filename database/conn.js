const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'nura',
    password: 'qwerty_21#',
    database: 'content_mysql',
});

connection.connect((err) => {
    if(!!err){
        console.log(err);
    }else{
        console.log('Koneksi Berhasil');
    }
})

module.exports = connection;
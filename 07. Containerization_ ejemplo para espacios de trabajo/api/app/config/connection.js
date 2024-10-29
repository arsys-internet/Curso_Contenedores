var mysql = require('mysql2');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'mysql',
      user: 'todo',
      password: 'password123!',
      database: 'todo'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      console.log(err);
      callback(err, connection);
    });
  };
}

module.exports = new Connection();

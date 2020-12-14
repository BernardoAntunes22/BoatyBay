const mysql = require('mysql');
const { promisify } = require('util');

class Database {

    static connection;

    static setConnection(config) {
        let conn = mysql.createPool(config);
        conn.getConnection((err) => {
            if (err) {
                console.error('There was a problem connecting to the Database.\n Dumping Stack.\n', err.stack);
                return;
            }

            this.config(conn);

            this.connection = conn;
            console.log('Connected to database.');
        });
    }

    static async config(conn) {
        this.query = await promisify(conn.query).bind(conn);
    }
}

module.exports = Database;
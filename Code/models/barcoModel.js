var pool = require('./connection');


let keys;
let vals;
let indexId;

module.exports.getByCliente = async (cliente) => {
    try {
        let res = await pool.query('SELECT * FROM Barco WHERE C_id = ?',cliente);
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Barcos.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports.create = async (barco) => {
    try {
        let res = await pool.query('INSERT INTO Barco SET ?', barco);
        return { C_id: res.insertId, ...barco };
    }
    catch (err) {
        console.log('An errror has occured while trying to INSERT into Barcos.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports.select = async () => {
    try {
        let res = await pool.query('SELECT * FROM Barco');
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Barcos.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports.selectById = async (id) => {
    try {
        let res = await pool.query('SELECT * FROM Barco WHERE B_id = ?', id);
        return res[0];
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Barcos.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports.update = async () => {
    Task.update = async (id, Barco) => {
        try {
            keys = Object.keys(Barco);
            vals = Object.values(Barco);
            indexId = keys.indexOf('C_id');
            keys.splice(indexId, 1);
            vals.splice(indexId, 1);
            let res = await pool.query('UPDATE Barco SET ' + keys.join(' = ? ,') + ' = ? WHERE id = ?', [...vals, id]);
            if (res.affectedRows == 0)
                return 'No Barcos updated';
            else
                return 'Barcos updated.';
        }
        
    catch (err) {
        console.log('An errror has occured while trying to UPDATE Barcos.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
}};

module.exports.delete = async (id) => {
    try {
        let res = await pool.query('DELETE FROM Barcos WHERE C_id = ?', id);
        return res.affectedRows;
    }
    catch (err) {
        console.log('An errror has occured while trying to DELETE FROM Barcos.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};




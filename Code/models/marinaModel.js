 var pool = require('./connection');


 //this
const Marina = {};


Marina.create = async (marina) => {
    try {
        let res = await pool.query('INSERT INTO Marina SET ?', marina);
        return { C_id: res.insertId, ...marina };
    }
    catch (err) {
        console.log('An errror has occured while trying to INSERT into Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

Marina.selectByName = async (name) => {
    try {
        const marina = await pool.query('SELECT * FROM Marina WHERE M_Name = ?', name);
        return marina;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

Marina.select = async () => {
    try {
        let res = await pool.query('SELECT * FROM Marina');
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

Marina.update = async () => {
    Task.update = async (id, Marina) => {
        try {
            let keys = Object.keys(Marina);
            let vals = Object.values(Marina);
            let indexId = keys.indexOf('C_id');
            keys.splice(indexId, 1);
            vals.splice(indexId, 1);
            let res = await pool.query('UPDATE Marina SET ' + keys.join(' = ? ,') + ' = ? WHERE id = ?', [...vals, id]);
            if (res.affectedRows == 0)
                return 'No Marinas updated';
            else
                return 'Marinas updated.';
        }
        
    catch (err) {
        console.log('An errror has occured while trying to UPDATE Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
}};

Marina.delete = async (id) => {
    try {
        let res = await pool.query('DELETE FROM Marinas WHERE C_id = ?', id);
        return res.affectedRows;
    }
    catch (err) {
        console.log('An errror has occured while trying to DELETE FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports = Marina; 
const Database = require('./database');


const Marina = function (marina) {
    this.M_id = marina.M_id;
    this.M_name = marina.M_name;
    this.M_telefone = marina.M_telefone;
    this.M_email = marina.M_email;
    this.M_4n = marina.M_4n;
    this.M_3n = marina.M_3n;
};

Marina.create = async (marina) => {
    try {
        let res = await Database.query('INSERT INTO Marina SET ?', marina);
        return { C_id: res.insertId, ...marina };
    }
    catch (err) {
        console.log('An errror has occured while trying to INSERT into Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

Marina.select = async () => {
    try {
        let res = await Database.query('SELECT * FROM Marina');
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
            let res = await Database.query('UPDATE Marina SET ' + keys.join(' = ? ,') + ' = ? WHERE id = ?', [...vals, id]);
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
        let res = await Database.query('DELETE FROM Marinas WHERE C_id = ?', id);
        return res.affectedRows;
    }
    catch (err) {
        console.log('An errror has occured while trying to DELETE FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports = Marina;
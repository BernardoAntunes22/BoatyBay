const Database = require('./database');


const Barco = function (barco) {
    this.C_id = barco.C_id;
    this.B_id = barco.B_id;
    this.B_size = barco.B_size;
    this.B_ano = barco.B_ano;
};


Barco.create = async (barco) => {
    try {
        let res = await Database.query('INSERT INTO Barco SET ?', barco);
        return { C_id: res.insertId, ...barco };
    }
    catch (err) {
        console.log('An errror has occured while trying to INSERT into Barcos.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

Barco.select = async () => {
    try {
        let res = await Database.query('SELECT * FROM Barco');
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Barcos.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

Barco.update = async () => {
    Task.update = async (id, Barco) => {
        try {
            let keys = Object.keys(Barco);
            let vals = Object.values(Barco);
            let indexId = keys.indexOf('C_id');
            keys.splice(indexId, 1);
            vals.splice(indexId, 1);
            let res = await Database.query('UPDATE Barco SET ' + keys.join(' = ? ,') + ' = ? WHERE id = ?', [...vals, id]);
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

Barco.delete = async (id) => {
    try {
        let res = await Database.query('DELETE FROM Barcos WHERE C_id = ?', id);
        return res.affectedRows;
    }
    catch (err) {
        console.log('An errror has occured while trying to DELETE FROM Barcos.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports = Barco;
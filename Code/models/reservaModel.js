/*var pool = require('./connection');




Reserva.create = async (reserva) => {
    try {
        let res = await pool.query('INSERT INTO Reserva SET ?', reserva);
        return { C_id: res.insertId, ...reserva };
    }
    catch (err) {
        console.log('An errror has occured while trying to INSERT into Reservas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

Reserva.select = async () => {
    try {
        let res = await pool.query('SELECT * FROM Reserva');
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Reservas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

Reserva.update = async () => {
    Task.update = async (id, Reserva) => {
        try {
            let keys = Object.keys(Reserva);
            let vals = Object.values(Reserva);
            let indexId = keys.indexOf('C_id');
            keys.splice(indexId, 1);
            vals.splice(indexId, 1);
            let res = await pool.query('UPDATE Reserva SET ' + keys.join(' = ? ,') + ' = ? WHERE id = ?', [...vals, id]);
            if (res.affectedRows == 0)
                return 'No Reservas updated';
            else
                return 'Reservas updated.';
        }
        
    catch (err) {
        console.log('An errror has occured while trying to UPDATE Reservas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
}};

Reserva.delete = async (id) => {
    try {
        let res = await pool.query('DELETE FROM Reservas WHERE C_id = ?', id);
        return res.affectedRows;
    }
    catch (err) {
        console.log('An errror has occured while trying to DELETE FROM Reservas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports = Reserva;*/
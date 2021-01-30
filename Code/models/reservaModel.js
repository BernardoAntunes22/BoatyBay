var pool = require('./connection');





module.exports.getByMarina = async (marina) => {
    try {
        const res = await pool.query('Select * From Reserva as r inner join Marina as m on r.M_id = m.M_id inner join Cliente as c on r.C_id = c.C_id where r.M_id = ?', marina);
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};


module.exports.create = async (reserva) => {
    try {
        let res = await pool.query('INSERT INTO Reserva SET ?', reserva);
        return { C_id: res.insertId, ...reserva };
    }
    catch (err) {
        console.log('An errror has occured while trying to INSERT into Reservas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports.select = async () => {
    try {
        let res = await pool.query('SELECT * FROM Reserva');
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Reservas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports.update = async () => {
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

module.exports.delete = async (id) => {
    try {
        let res = await pool.query('DELETE FROM Reservas WHERE C_id = ?', id);
        return res.affectedRows;
    }
    catch (err) {
        console.log('An errror has occured while trying to DELETE FROM Reservas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};


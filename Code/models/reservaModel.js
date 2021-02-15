var pool = require('./connection');




module.exports.getByCliente = async (id) => {
    try {
        const res = await pool.query('Select * From Reserva as r INNER JOIN Marina as m on r.M_id = m.M_id INNER JOIN Cliente as c on r.C_id = c.C_id  Where r.C_id = ?', id);
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Reservas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};


module.exports.getByMarina = async (marina) => {
    try {
        const res = await pool.query('Select * From Reserva as r inner join Marina as m on r.M_id = m.M_id inner join Cliente as c on r.C_id = c.C_id inner join Cod_Post as cp on m.CP_id = cp.CP_id where r.M_id = ?', marina);
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports.getByid = async (id) => {
    try {
        const res = await pool.query('Select * From Reserva Where R_id = ?', id);
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports.getEvery = async () => {
    try {
        const res = await pool.query('Select * from Reserva as r inner join Cliente as c on r.C_id = c.C_id inner join Marina as m on r.M_id = m .M_id');
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};


module.exports.create = async (reserva) => {
    try {
        let res = await pool.query('INSERT INTO Reserva (R_dateInicial, R_dateFinal, R_reservaLugar, C_id, M_id, B_id) values(?,?,?,?,?,?) ', [reserva.R_dateInicial, reserva.R_dateFinal, reserva.R_reservaLugar, reserva.C_id, reserva.M_id, reserva.B_id]);
        return res;
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

module.exports.update = async (id, reserva) => {
        try {
            let keys = Object.keys(reserva);
            let vals = Object.values(reserva);
            let indexId = keys.indexOf('R_id');
            if(indexId != -1) {
                keys.splice(indexId, 1);
                vals.splice(indexId, 1);
            }
            let res = await pool.query('UPDATE Reserva SET ' + keys.join(' = ? ,') + ' = ? WHERE R_id = ?', [...vals, id]);
            if (res.affectedRows == 0)
                return 'No Reservas updated';
            else
                return 'Reservas updated.';
        }
        
    catch (err) {
        console.log('An errror has occured while trying to UPDATE Reservas.\n Dumping Stack.\n', err.stack);
        return err.message;
}};

module.exports.delete = async (id) => {
    try {
        let res = await pool.query('DELETE FROM Reserva WHERE R_id = ?', id);
        return res.affectedRows;
    }
    catch (err) {
        console.log('An errror has occured while trying to DELETE FROM Reservas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};


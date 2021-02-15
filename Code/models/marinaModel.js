 var pool = require('./connection');





module.exports.selectByName = async (name) => {
    try {
        const marina = await pool.query('SELECT * FROM Marina WHERE M_Name = ?', name);
        return marina;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports.getCP= async (id) => {
    try {
        const marina = await pool.query('select * from Marina as m inner join Cod_Post as c on m.CP_id = c.CP_id Where m.M_id = ?',id);
        return marina[0];
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};





module.exports.select = async () => {
    try {
        let res = await pool.query('SELECT * FROM Marina');
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports.update = async (id, marina) => {
    try {
        let keys = Object.keys(marina);
        let vals = Object.values(marina);
        let indexId = keys.indexOf('M_id');
        if(indexId != -1) {
            keys.splice(indexId, 1);
            vals.splice(indexId, 1);
        }
        let res = await pool.query('UPDATE Marina SET ' + keys.join(' = ? ,') + ' = ? WHERE M_id = ?', [...vals, id]);
        if (res.affectedRows == 0)
            return 'No Marinas updated';
        else
            return 'Marinas updated.';
    }
    
catch (err) {
    console.log('An errror has occured while trying to UPDATE Marinas.\n Dumping Stack.\n', err.stack);
    return err.message;
}};

module.exports.delete = async (id) => {
    try {
        let res = await pool.query('DELETE FROM Marina WHERE M_id = ?', id);
        return res.affectedRows;
    }
    catch (err) {
        console.log('An errror has occured while trying to DELETE FROM Marinas.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};


var pool = require('./connection');

module.exports.getByCliente = async () => {
    try {
        const cliente = await pool.query('SELECT * FROM Cliente');
        return cliente;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Clientes.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports.selectByName = async (name) => {
    try {
        const cliente = await pool.query('SELECT * FROM Cliente WHERE C_Name = ?', name);
        return cliente;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Clientes.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};
module.exports.update = async () => {
    Task.update = async (id, Cliente) => {
        try {
            let keys = Object.keys(Cliente);
            let vals = Object.values(Cliente);
            let indexId = keys.indexOf('C_id');
            keys.splice(indexId, 1);
            vals.splice(indexId, 1);
            let res = await pool.query('UPDATE Cliente SET ' + keys.join(' = ? ,') + ' = ? WHERE id = ?', [...vals, id]);
            if (res.affectedRows == 0)
                return 'No Clientes updated';
            else
                return 'Clientes updated.';
        }
        
    catch (err) {
        console.log('An errror has occured while trying to UPDATE Clientes.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
}};



module.exports.delete = async (id) => {
    try {
        let res = await pool.query('DELETE FROM Clientes WHERE C_id = ?', id);
        return res.affectedRows;
    }
    catch (err) {
        console.log('An errror has occured while trying to DELETE FROM Clientes.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

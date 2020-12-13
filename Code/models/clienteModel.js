const Database = require('./database');


const Cliente = function (cliente) {
    this.C_id = cliente.C_id;
    this.C_Name = cliente.C_Name;
    this.C_data_nasc = cliente.C_data_nasc;
    this.C_nif = cliente.C_nif;
    this.C_rua_nome = cliente.C_rua_Nome;
    this.C_n_policia = cliente.C_n_policia;
};

Cliente.create = async (cliente) => {
    try {
        let res = await Database.query('INSERT INTO Cliente SET ?', cliente);
        return { C_id: res.insertId, ...cliente };
    }
    catch (err) {
        console.log('An errror has occured while trying to INSERT into Clientes.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

Cliente.select = async () => {
    try {
        let res = await Database.query('SELECT * FROM Cliente');
        return res;
    }
    catch (err) {
        console.log('An errror has occured while trying to SELECT FROM Clientes.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

Cliente.update = async () => {
    Task.update = async (id, Cliente) => {
        try {
            let keys = Object.keys(Cliente);
            let vals = Object.values(Cliente);
            let indexId = keys.indexOf('C_id');
            keys.splice(indexId, 1);
            vals.splice(indexId, 1);
            let res = await Database.query('UPDATE Cliente SET ' + keys.join(' = ? ,') + ' = ? WHERE id = ?', [...vals, id]);
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

Cliente.delete = async (id) => {
    try {
        let res = await Database.query('DELETE FROM Clientes WHERE C_id = ?', id);
        return res.affectedRows;
    }
    catch (err) {
        console.log('An errror has occured while trying to DELETE FROM Clientes.\n Dumping Stack.\n', err.stack);
        return err.message;
    }
};

module.exports = Cliente;
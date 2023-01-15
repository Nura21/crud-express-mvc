module.exports = {
    fetchData: (db, callback) => {
        db.query("SELECT * FROM contents", callback);
    },
    getById: (db, id, callback) => {
        db.query("SELECT * FROM contents WHERE id =" + id, callback);
    },
    insertData:(db, data, callback) => {
        db.query("INSERT INTO contents SET ?", data, callback);
    },
    updateData: (db, id, data, callback) => {
        db.query("UPDATE contents SET ? WHERE id =" + id, data, callback);
    },
    deleteData: (db, id, callback) => {
        db.query("DELETE FROM contents WHERE id = "+ id, callback);
    },
}; 
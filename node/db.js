import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "todo_list",
});

db.connect(() => {
    console.log("conneced to database");
});

export default db;

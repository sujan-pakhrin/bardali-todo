import db from "../db.js";

export const creatTodo = (req, res) => {
    const { title, description } = req.body;
    const created_at = new Date();
    const sql =
        "INSERT INTO todo (title, description, created_at) VALUES (?, ?, ?)";
    const values = [title, description, created_at];
    db.query(sql, values, (err, result) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send({
                message: "Todo Added Successfully!!",
                result,
            });
        }
    });
};

export const getTodos = (req, res) => {
    const sql = "select * from todo";
    db.query(sql, (err, data) => {
        if (err) {
            res.status(300).send(err);
        } else {
            res.status(200).send(data);
        }
    });
};

export const getTodo = (req, res) => {
    const { id } = req.params;
    console.log(id);
    const sql = "select * from todo where id=?";
    db.query(sql, id, (err, data) => {
        if (err) {
            res.status(300).send(err);
        } else {
            res.status(200).send(data[0]);
        }
    });
};

export const updateTodo = (req,res) => {
    const {description,title}=req.body
    const { id } = req.params;
    const sql = "update todo set title=?, description=? where id=?";
    const values = [title, description, id];
    db.query(sql, values, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send({ message: "Todo Update successfully!!" ,data});
        }
    });
};
export const updateStatus = (req,res) => {
    const { id } = req.params;
    const sql = "update todo set status=? where id=?";
    const values = [1, id];
    db.query(sql, values, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send({ message: "Todo status Update successfully!!" ,data});
        }
    });
};
export const deleteTodo = (req,res) => {
    const { id } = req.params;
    const sql = "delete from todo where id=?";
    db.query(sql, id, (err, data) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.status(200).send({ message: "Todo deleted successfully!!" ,data});
        }
    });
};

import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM employee");
        res.json(rows);
    } catch (error) {
        res.status(500).json({message: "something goes wrong"});
    }
}
export const getEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);
        (rows.length > 0 )? res.json(rows[0]) : res.status(404).json({message: "Employee not found"});
    } catch (error) {
        res.status(500).json({message: "something goes wrong"});
    }
}
export const createEmployee = async (req, res) => {
    try {
        const {name, salary} = req.body;
        const [rows] = await pool.query("INSERT INTO employee (name, salary) VALUES (?, ?)", [name, salary]);
        (rows.affectedRows > 0 )? res.send({message: "Employee created", id: rows.insertId}) : res.send({message: "Employee not created"});
    } catch (error) {
        res.status(500).json({message: "something goes wrong"});
    }
}
export const updateEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, salary} = req.body;
        const [rows] = await pool.query("UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id]);
        (rows.affectedRows > 0 )? res.send({message: "Employee updated"}) : res.send({message: "Employee not updated"});
    } catch (error) {
        res.status(500).json({message: "something goes wrong"});
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const {id} = req.params;
        const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);
        (rows.affectedRows > 0 )? res.sendStatus(204) : res.send({message: "Employee not found"});
    } catch (error) {
        res.status(500).json({message: "something goes wrong"});
    }
}

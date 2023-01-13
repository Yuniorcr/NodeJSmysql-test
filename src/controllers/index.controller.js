import { pool } from "../db.js"; 

export const index = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM employee");
    res.json(result);

};
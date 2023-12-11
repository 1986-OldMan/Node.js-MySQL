import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({
    path: './config.env'
});

const pool = mysql.createPool({
    host: process.env.MYSQL_LOCAL_HOST,
    user: process.env.MYSQL_USER,
    password:  process.env.MYSQL_PASSWORD ,
    database: process.env.MYSQL_DATABASE
}).promise()


// basic query
export async function getAllnotes() {
    const [rows] = await pool.query("SELECT * FROM notes")
    return rows
  }


// prepared statement
export async function getNote(id) {
    const [rows] = await pool.query( `
    SELECT * FROM notes WHERE id = ? ` , [id] )
    return rows
}

// insert statement
export async function createNote(title , contents) {
    const [result] = await pool.query(`
    INSERT INTO notes (title , contents)
    VALUES(? , ?)
    ` , [title , contents] )
    const id = result.insertId
    return getNote(id)
}

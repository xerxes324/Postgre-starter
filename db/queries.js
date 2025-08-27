const { search } = require("../routes/userRouter");
const pool = require("./pool");

async function getAllUsernames(){
    const {rows} = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUsername(username){
    await pool.query("INSERT INTO usernames (username)  VALUES($1)", [username]);
}

async function searchUsername(user){
    const {rows} = await pool.query(
        "SELECT * FROM usernames WHERE username LIKE $1", [`%${user}%`]
    );
    return rows;
}

async function deleteUser(user){
    const result = await pool.query(
        "DELETE FROM usernames where username = $1", [user]
    );

    if ( result.rowCount === 0){
        throw new Error("USER NOT FOUND");
    }
    return;
}

module.exports = {
    getAllUsernames,
    insertUsername,
    searchUsername,
    deleteUser
};

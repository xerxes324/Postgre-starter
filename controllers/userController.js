exports.userFormPost = (req,res)=>{
    res.send(`username to be saved: ${req.body.username} `);
}

const db = require("../db/queries");

async function getUsernames(req,res){

    if (req.query.username){
        const user = req.query.username;
        const temp = await db.searchUsername(user);
        console.log(temp, "is the TEMP");
        if ( temp.length > 0 ){
            res.send(req.query.username + " exists");
        }

        else{
            res.send('user doesnt exist');
        }

        return;
    }

    const usernames = await db.getAllUsernames();
    console.log("usernames: ", usernames);
    res.send("Usernames : " + 
        usernames.map(user => {
            return user.username
        })
        .join(", ")
    );
}


async function createUsernameGet(req,res){
    res.render("userData");
}

async function createUsernamePost(req,res){
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}


async function getDeleteUser(req,res){
    if ( req.query.username){
        const user = req.query.username;
        await db.deleteUser(user);
        console.log("Deleted!");
        res.redirect("/");
    }
}

module.exports = {
    getUsernames, createUsernameGet, createUsernamePost, getDeleteUser
}
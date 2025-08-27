exports.userGet = (req,res) =>{
    console.log("Users names will be logged here");
    res.send("hello");
};

exports.userFormGet = (req,res)=>{
    res.render("userData");
}

exports.userFormPost = (req,res)=>{
    res.send(`username to be saved: ${req.body.username} `);
}
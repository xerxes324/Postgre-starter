const userRouter = require("./routes/userRouter");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8080;

app.use("/", userRouter);

app.listen(PORT, (error)=>{

    if ( error){
        throw error;
    }

    console.log(`Server is running on PORT ${PORT}.`);
})
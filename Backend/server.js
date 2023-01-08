const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");
const PORT = process.env.PORT || 5000;
const taskRoutes = require("./routes/taskRoutes");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/tasks/", taskRoutes);

//home page
app.get('/', (req, res) => {
    return res.send("Home-Page");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server running on port: ", PORT);
        });
    })
    .catch((error) => console.log(error));



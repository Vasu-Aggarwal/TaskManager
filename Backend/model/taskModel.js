const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        completed: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    {
        timestamps: true    //add timestamps automatically for every entry into the db.
    }
)


const Task = mongoose.model("Task", taskSchema);

module.exports = Task
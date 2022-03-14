const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    dueDate: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

var Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;
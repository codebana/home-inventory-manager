
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    value: { type: Number},
    comment: { type: String },
});

module.exports = mongoose.model('Task', taskSchema);

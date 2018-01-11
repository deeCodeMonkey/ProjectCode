const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    description: String,
    dueDate: Date,
    headline: String,
    image: String,
    location: String,
    projectOwner: String,
    title: String,
    requirements: String,
    //associate to filter
    user: [{
        type: Schema.Types.ObjectId,
        ref: "users"
    }]
});

var Project = mongoose.model('projects', projectSchema);

module.exports = Project;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    //pulled in from linkedin
    linkedInId: String,
    fullName: String,
    email: String,
    photo: String,
    headline: String,
    location: String,
    linkedInProfile: String,

    gitHub: String,
    stackOverflow: String,
    portfolioSite: String,
    aboutMe: String,
    skills: String,

    // `project` is an object that stores a Project id
    // The ref property links the ObjectId to the Project model
    // This allows us to populate the User with an associated Project
    project: [{
        type: Schema.Types.ObjectId,
        ref: "projects"
    }]

});

//instance of User record in 'users' collection with userSchema
var User = mongoose.model('users', userSchema);

module.exports = User;
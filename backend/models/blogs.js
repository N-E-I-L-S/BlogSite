const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogsSchema = new Schema({
        id:{
            type : String,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true,
        },
});
module.exports = mongoose.model('blogs', BlogsSchema)
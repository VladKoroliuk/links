import pkg from 'mongoose'
const { Schema, model } = pkg

const transition = new Schema({
    link:{
        ref: "Link",
        type: Schema.Types.ObjectId,
        required: true
    },
    ip: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    },
    
})

export default model('Transition', transition)
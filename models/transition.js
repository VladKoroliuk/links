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
    country: {
        type: String,
        required: false
    },
    device: {
        type: Object,
        required: false 
    },
    os: {
        type: Object,
        required: false
    },
    browser: {
        type: Object,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    
})

export default model('Transition', transition)
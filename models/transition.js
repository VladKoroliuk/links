import pkg from 'mongoose'
const { Schema, model } = pkg

const transition = new Schema({
    link:{
        ref: "Link",
        type: Schema.Types.ObjectId,
        required: true
    },
    linkCreator:{
        ref: "User",
        type: Schema.Types.ObjectId,
        required: true
    },
    ip: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    os: {
        type: String,
        required: false
    },
    osVersion: {
        type: String,
        required: false
    },
    browser: {
        type: String,
        required: false
    },
    browserVersion: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    cpuArchitecture: {
        type: String,
        required: false
    }
    
})

export default model('Transition', transition)
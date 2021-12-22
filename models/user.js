import pkg from 'mongoose'
const { Schema, model } = pkg

const user = new Schema({
    email:{
        type: String,
        unique: true,
        reqired: true
    },
    password:{
        type: String,
        reqired: true
    },
})

export default model('User', user)
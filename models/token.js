import pkg from 'mongoose'
const { Schema, model } = pkg

const token = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    refreshToken:{
        type: String,
        reqired: true
    },
})

export default model('Token', token)
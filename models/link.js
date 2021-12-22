import pkg from 'mongoose'
const { Schema, model } = pkg

const link = new Schema({
    user: {
        ref: 'User',
        required: true,
        type: Schema.Types.ObjectId
    },
    from: {
        required: true,
        type: String
    },
    key: {
        required: true,
        type: String
    },
})

export default model('Link', link)
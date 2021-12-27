import pkg from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
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
    date: {
        type: Date,
        default: Date.now
    }
})

link.plugin(mongoosePaginate)

export default model('Link', link)
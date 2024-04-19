import mongoose from 'mongoose'

const movieBookSchema = mongoose.Schema(

    {
        title:
        {
            type: String,
            required: true
        },
        show:
        {
            type: String,
            required: true
        },
        seatNo:
        {
            type: [Number],
            required: true
        },
        name:
        {
            type: String,
            required: true
        },
        mob:
        {
            type: String,
            required: true
        }
    }
)

export default mongoose.model('moviebook', movieBookSchema)
import mongoose from 'mongoose'

const movieCreateSchema=mongoose.Schema(

    {
        title:
        {
            type:String,
            required:true
        },
        description:
        {
            type:String,
            required:true
        },
        genre:
        {
            type:String,
            required:true
        },
        image:
        {
            type:String,
            required:true
        },
        cast:
        {
            type:String,
            required:true
        }

    }
)

export default mongoose.model('moviecreate',movieCreateSchema)
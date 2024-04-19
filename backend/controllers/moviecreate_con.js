import MovieCreate from '../models/moviecreate'

export const createMovie=async(req,res)=>
{
    let movie
    try {
        movie=await new MovieCreate(req.body)
        await movie.save()
    } catch (err) {
        return res.status(400).json({message:"Problem on creating movie"})
    }
    return res.status(201).json({message:"Movie created",movie})
}

export const updateMovie=async(req,res)=>
{
    let movie
    try {
        movie=await MovieCreate.findByIdAndUpdate(req.params.id,req.body,{new:true})
        await movie.save()
    } catch (err) {
        return res.status(400).json({message:"Problem on updating movie"})
    }
    return res.status(200).json({message:"Movie updated",movie})
}
export const deleteMovie=async(req,res)=>
{
    let movie
    try {
        movie=await MovieCreate.findByIdAndDelete(req.params.id)
        
    } catch (err) {
        return res.status(400).json({message:"Problem on deleting movie"})
    }
    return res.status(200).json({message:"Movie deleted",movie})
}
export const getAllMovies=async(req,res)=>
{
    let movie
    try {
        movie=await MovieCreate.find()
        
    } catch (err) {
        return res.status(404).json({message:"No movies found"})
    }
    return res.status(200).json({message:movie})
}
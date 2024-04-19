import MovieBook from '../models/moviebook.js'

 export const bookMovie = async (req, res) => {
    let book
    try {
        book = new MovieBook(req.body)
        await book.save()
    }
    catch (e) {
        return res.status(404).json({ message: "Can't book a movie" })
    }

    return res.status(200).json({ message:book})
}
export const updatebook = async (req, res) => {
    let updatebook
    try {
        updatebook = await MovieBook.findByIdAndUpdate(req.params.id,req.body,{new:true})
        await updatebook.save()
    }
    catch (e) {
        return res.status(404).json({ message: "No datas found" })
    }

    return res.status(200).json({ message:"updated",updatebook})
}
export const deletebook = async (req, res) => {
    let updatebook
    try {
        updatebook = await MovieBook.findByIdAndDelete(req.params.id)
       
    }
    catch (e) {
        return res.status(404).json({ message: "No datas found" })
    }

    return res.status(200).json({ message:"Deleted succcessfully"})
}
export const getAllbook = async (req, res) => {
    let allbook
    try {
        allbook = await MovieBook.find()
       
    }
    catch (e) {
        return res.status(404).json({ message: "No datas found" })
    }

    return res.status(200).json({ message:allbook})
}

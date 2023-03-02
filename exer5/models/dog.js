import mongoose from "mongoose"

//name, age, breed, date they entered the shelter, and date adopted.
const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    dateEnter: {
        type: Date,
        required: true
    },
    dateAdopted: Date
})

export default mongoose.model("Dog", dogSchema)
const mongoose = require ('mongoose')

const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://UserAdmin:1234567890@at3.aganv.mongodb.net/todolist')
}

module.exports = conn
import mongoose from "mongoose";

 export const connectDB=async()=>
{
    await mongoose.connect('mongodb+srv://greatstackAnk:0124399@cluster5.m9itxah.mongodb.net/food-del').then(()=>console.log("DB connected"))
}
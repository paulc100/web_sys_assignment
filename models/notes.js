import mongoose from 'mongoose';

export const Note = mongoose.model("Note", { 
    title: String, 
    description: String, 
    image: String,
    tag: String,
    date: String
});
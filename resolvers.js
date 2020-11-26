import { Note } from "./models/notes.js";
import cloudinary from "cloudinary";

export const resolvers = {
  Query: {
    getAllNotes: () => Note.find(),
    getNoteById: async (_, { id }) => {
      const note = await Note.findById(id);
      return note;
    },
    getNoteByTitle: (_, { title }) => Note.find({ title }),
    getNoteByTag: (_, { tag }) => Note.find({ tag }),
    getNoteByDate: (_, { date }) => Note.find({ date }),
    },

  Mutation: {
    createNote: async (_, { title, description, image }) => {
      const note = new Note({ title, description, image: `${await cloudinary.uploader.upload(image)}` });
      await note.save();
      return note;
    },
    deleteNote: async (_, { id }) => {
      const note = await Note.findByIdAndRemove(id);
        return note;
    },
    updateNote: async (_, { id, image }) => { 
      const note = await Note.findByIdAndUpdate(id, { image: `${await cloudinary.uploader.upload(image)}` });
      if (image !== null) {
        cloudinary.uploader.upload(image, { tags: 'App', public_id: 'app_image' });
      }
      return note;
    },
  },
};


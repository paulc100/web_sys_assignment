import aserver from "apollo-server";
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";

import cloudinary from "cloudinary";

const { ApolloServer } = aserver;

const startServer = async () => {
  await mongoose.connect("mongodb+srv://admin:P@ssw0rd@cluster0.8jve5.mongodb.net/dbLab5?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.set('useFindAndModify', false);

  cloudinary.config({
    cloud_name: "paulacit",
    api_key: "957697833911882",
    api_secret: "RZaIdkxwN4AG4fuMVF5djGYyGEc",
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startServer();
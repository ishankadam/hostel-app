require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolver");
const connectDB = require("./db");

(async () => {
  await connectDB();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const PORT = process.env.PORT || 4000;
  server.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();

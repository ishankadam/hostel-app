const connectDB = require("./db");

const resolvers = {
  Query: {
    locations: async () => {
      const db = await connectDB();
      const locations = await db.collection("locations").find().toArray();

      const locationsWithHostelCount = await Promise.all(
        locations.map(async (location) => {
          const hostelCount = await db
            .collection("hostels")
            .countDocuments({ locationId: location.id });

          return {
            ...location,
            hostelCount,
          };
        })
      );

      return locationsWithHostelCount;
    },

    hostels: async (_, { locationId }) => {
      try {
        const db = await connectDB();

        const hostels = await db
          .collection("hostels")
          .find({ locationId: locationId })
          .toArray();
        const location = await db
          .collection("locations")
          .findOne({ id: locationId });

        if (!location) {
          throw new Error("Location not found");
        }

        return {
          locationName: location.name,
          hostels: hostels.map((hostel) => ({
            id: hostel._id.toString(),
            name: hostel.name,
            image: hostel.image,
          })),
        };
      } catch (err) {
        throw new Error("Failed to fetch hostels");
      }
    },
  },
};

module.exports = resolvers;

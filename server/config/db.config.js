const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    const con = await connect(process.env.MONGO_URL);
    console.log(`MongoDB connected to ${con.connection.host}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;

import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log("Database Connected")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/freshcart`)
  } catch (error) {
    console.error(error.message);
  }
}

export default connectDB;

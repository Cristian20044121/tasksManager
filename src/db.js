import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conexión a la base de datos");
  } catch (error) {
    console.log(
      `No se pudo establecer la conexión a la base de datos, ${error}`
    );
  }
};

export default connectDB;

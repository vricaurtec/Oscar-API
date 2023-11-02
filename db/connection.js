import mongoose from "mongoose";
import chalk from "chalk";

let MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/Oscar-API";

mongoose.set("returnOriginal", false);

mongoose.connect(MONGODB_URI).catch((err) => {
  console.log(`Error connection go MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;

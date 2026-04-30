import dotenv from "dotenv";

dotenv.config();

const config = {
   port: process.env.PORT || "",
  jwtSecret: process.env.JWT_SECRET || "",
   mongodbUrl: process.env.MONGODB_URL || "",
  
};

export default config;
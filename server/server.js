const express = require("express");
const { config } = require("dotenv");
const connectDB = require("./config/db.config");
const cors = require("cors");
const router = require("./routes/travel.route");
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use("/api/travel", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}...`);
});

const express = require("express");
const bodyParser = require("body-parser");
const { User } = require("./models/chatModel");
const connectDB = require("./config/db");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();
app.use(express.json()); //to accept json data
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/user", userRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

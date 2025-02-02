require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const faqRoutes = require("./routes/faqRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/faqs", faqRoutes);

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("✅ MongoDB Connected!");
        app.listen(process.env.PORT, () => console.log(`✅ Server running on http://localhost:${process.env.PORT}`));
    })
    .catch((error) => console.error("MongoDB Connection Error:", error));

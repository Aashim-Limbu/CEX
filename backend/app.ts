import express from "express";

const app = express();

app.use(express.json());

// Routes
app.use("/api/v1/order",)
app.get("/health", (req, res) => {
  res.status(200).json({
    message: "We're healthy 👍",
  });
});

export default app;

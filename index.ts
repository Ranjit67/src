import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    data: "Hello world",
  });
});

app.listen(80, () => {
  console.log("Server is listening on port 80");
});

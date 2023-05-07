const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, getJokes, addJoke, changeJoke, deleteJokes } = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/jokes", getJokes);
app.post("/api/jokes", addJoke);
app.put("/api/jokes", changeJoke);
app.delete("/api/jokes", deleteJokes);

app.listen(4000, () => console.log("Server running on 4000"));

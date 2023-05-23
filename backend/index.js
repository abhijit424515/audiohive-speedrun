import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import fs from "fs";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/noOfAnime", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/animes.json"));
  const noOfAnime = Object.keys(data).length;
  return res.status(200).json({ noOfAnime });
});

app.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./data/animes.json"));
  return res.status(200).json(data);
});

app.get("/getAnimeList", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./newData.json"));
  return res.status(200).json(data);
});

// app.get("/temp", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("./data/animes.json"));
//   let newData = [];

//   for (let i = 0; i < 200; i++) {
//     newData.push(data[Object.keys(data)[i]]);
//   }

//   fs.writeFileSync("./newData.json", JSON.stringify(newData), "utf-8");

//   return res.status(200).json({ 1: 2 });
// });

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`SERVER: ${port}`));

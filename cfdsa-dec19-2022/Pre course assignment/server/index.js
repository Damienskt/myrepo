const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();
const cors = require('cors')

const messages = ["Logic will get you from A to B. Imagination will take you everywhere.", "There are 10 kinds of people. Those who know binary and those who don't.",
"There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
"It's not that I'm so smart, it's just that I stay with problems longer.", "It is pitch dark. You are likely to be eaten by a grue."]

app.use(cors())

app.get("/api/message", (req, res) => {
    res.json({ message: messages[between(0, 5)] });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}
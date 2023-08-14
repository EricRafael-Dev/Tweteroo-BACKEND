import express from "express";

const app = express();


let Users = [];
let Tweets = [];

app.post("/sign-up", (req, res) => {

    const { username, avatar } = req.body;

    const newUser = {username, avatar};

    Users.push(newUser);

    res.send("OK");

})


app.post("/tweets", (req, res) => {

    const { username, tweet } = req.body;

    const newTweet = {username, tweet};

    Tweets.push(newTweet);

    res.send("OK");

})

const PORT = 5000;

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}!`));
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

let Avatar;
let Users = [];
let Tweets = [];

app.get("/tweets", (req, res) => {
    res.send(ArrayDeTweets.slice(-10));
})

app.post("/sign-up", (req, res) => {

    const { username, avatar } = req.body;

    Avatar = avatar;


    const newUser = {username, avatar: Avatar};

    Users.push(newUser);

    res.send("OK");

})


app.post("/tweets", (req, res) => {

    if(Users.length === 0){
        return res.status(401).send("Unauthorized");
    }

    const { username, tweet } = req.body;
    const newTweet = {username, avatar: Avatar, tweet};

    Tweets.push(newTweet);

    res.send("OK");

})

const PORT = 5000;

app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}!`));
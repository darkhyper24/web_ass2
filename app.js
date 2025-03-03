const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mymiddlewares = require("./authenticate");
const post = require("./post");
const get = require("./get");
const borrow = require("./borrow");
const del = require("./delete");
const returnbook = require("./return");
const port = 1234;

app.use(mymiddlewares.logger);
app.use(bodyParser.json());
app.use(post);
app.use(get);
app.use(borrow);
app.use(del);
app.use(returnbook);

app.get('/authorize', (req,res) => {
    res.send("you now have access to system");
})

app.listen(port, () =>{
    console.log(`Running on port http://localhost:${port}`);
    console.log(mymiddlewares.logger);
})
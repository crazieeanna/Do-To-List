const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

let newItemsAdd = ["Buy Food", "Cook Food", "Eat Food"];

app.get('/', (req, res) => {
    let currDate = new Date();
    let currDateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    let currDay = currDate.toLocaleDateString("en-US", currDateOptions);

    res.render("todolist", {day: currDay, newItemList: newItemsAdd});
});

app.post('/', (req, res) => {
    let newItem = req.body.newItemInput;
    newItemsAdd.push(newItem);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("listen to 3000");
});
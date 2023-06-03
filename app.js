const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

let newFoodItemsAdd = ["Buy Food", "Cook Food", "Eat Food"];
let newWorkItemsAdd = [];

app.get('/', (req, res) => {
    /* Start of creating current date and day */
    let currDate = new Date();
    let currDateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    let currDay = currDate.toLocaleDateString("en-US", currDateOptions);
    /* End of creating current date and day */

    res.render("todolist", {title: currDay, newItemList: newFoodItemsAdd});
});

app.get('/work', (req, res) => {
    res.render("todolist", {title: "Work List", newItemList: newWorkItemsAdd});
});

app.post('/', (req, res) => {
    let newWorkItem = req.body.newItemInput;
    let newFoodItem = req.body.newItemInput;
    
    if(req.body.addNewItem === "Work List") {
        newWorkItemsAdd.push(newWorkItem);
        res.redirect('/work');
    } else {
        newFoodItemsAdd.push(newFoodItem);
        res.redirect('/');
    }
});

app.listen(3000, () => {
    console.log("listen to 3000");
});
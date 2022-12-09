var db = require('../model/dbConnection')

var cardList = [

    {

        title: "Porche",
        image: "car1.jpg",
        link: "About Porche",
        desciption: "Demo desciption about Porche"

    },
    {

        title: "Porche Blue",
        image: "car3.jpg",
        link: "About Porche Blue",
        desciption: "Demo desciption about Porche Blue"

    }

];
exports.getCarCollection = async function (req, res, nxt) {
    var colData = await db.getCollection('bike')
    console.log(colData)
    await res.json({ statusCode: 200, data: colData, message: "Success" })
}
exports.addCollection = async function (req, res, nxt) {
    var formObj = {
        title: "Porche Red",
        image: "car1.jpg",
        link: "About Porche",
        desciption: "Demo desciption about Porche"
    }
    //console.log(.title)

   var saveData = await db.addCollection('bike',req.body)

   res.send('Hello')
}

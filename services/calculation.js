exports.addition = async function (req, res, nxt) {
    try {
        var number1 = req.query.number1;
        var number2 = req.query.number2;
        console.log(req.query)
        var result = await addNumbers(number1, number2)
        res.json({ statusCode: 200, data: result, message: 'Success' })
    } catch (error) {
        console.log(error)
    }
}

exports.n_addition = async function (req, res, nxt) {
    try {
        var number_string = req.query.numbers
        if (number_string.match(/^ *\d+ *(?:, *\d+ *)*$/g)) {
            var numbers = number_string.split(',');
            var result = 0;
            for (let num of numbers) {
                result += parseInt(num);
            }
            console.log(req.query)
            res.json({ statusCode: 200, data: result, message: 'Success' })
        }
        else {
            res.json({ statusCode: 200, data: 'Incorrect String Value. Expecting coma seperated numbers', message: 'Error' })
        }
    } catch (error) {
        console.log(error)
    }
}
exports.subtraction = async function (req, res, nxt) {
    try {
        var number1 = req.query.number1;
        var number2 = req.query.number2;
        console.log(req.query)
        var result = await subNumbers(number1, number2)
        res.json({ statusCode: 200, data: result, message: 'Success' })
    } catch (error) {
        console.log(error)
    }
}
exports.updateArray = async function (req, res, nxt) {
    try {
        var number1 = req.query.number;
            await DataCollection.push(number1)
        res.json({ statusCode: 200, data: DataCollection, message: 'Success' })
    } catch (error) {
        console.log(error)
    }
}
exports.deleteArray = async function (req, res, nxt) {
    try {
        var number1 = req.query.number;
            const index = DataCollection.indexOf(parseInt(number1));
            if (index > -1) { 
                DataCollection.splice(index, 1); 
              res.json({ statusCode: 200, data: DataCollection, message: 'Success' })
            }
            else{
                res.json({ statusCode: 200, data: 'Entered number not found in collection.', message: 'Error' })
            }
        
    } catch (error) {
        console.log(error)
    }
}
const addNumbers = (number1, number2) => {

    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 + num2;
    return result;
}
const subNumbers = (number1, number2) => {

    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 - num2;
    return result;
}
var DataCollection = [1,2,3,4]

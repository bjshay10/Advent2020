var fs = require('fs')
var diffOne = 1
var diffThree = 1

fs.readFile('./Day10/input.txt', function(err, data) {
// fs.readFile('./Day10/intput-test.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    var sortedNum = []

    for (a in array) {
        sortedNum[array[a]] = array[a]
    }

    var trimmedArray = []

    for (b in sortedNum) {
        trimmedArray.push(parseInt(sortedNum[b]))
        // console.log(sortedNum[b])
    }

    for (c in trimmedArray) {
        // console.log(trimmedArray[c])
        var temp = parseInt(c) + 1
        var one = trimmedArray[c]
        var two = trimmedArray[temp]
        var diff = parseInt(two) - parseInt(one)
        
        // console.log(`${parseInt(two)} - ${parseInt(one)} = ${diff}`)
        if (diff == 1){
            diffOne++
        } else if (diff == 3) {
            diffThree++
        }
        // console.log(`one = ${diffOne}; three= ${diffThree}`)
    }

    var final = parseInt(diffOne) * parseInt(diffThree)

    console.log(`one * three = ${diffOne} * ${diffThree}`)
    console.log(`Final value is ${final}`)

})
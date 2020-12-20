var fs = require('fs')

var validArrangements = []
var numArrays = 0

const isValid = ((isValidArray) => {
    console.log(`Begin isValid`)

    for (iV in isValidArray){
        nextNode = parseInt(iV) + 1
        nodeDiff = parseInt(isValidArray[nextNode] - parseInt(isValidArray[iV]))
        console.log(`node diff? ${nodeDiff}`)
        if (nodeDiff > 3){
            console.log(`End isValid - NO`)
            return 'No'
        } else {
            console.log(`End isValid - Yes`)
            return 'Yes'
        }
    }
})

const subtractNode = ((subArray, subIndx) => {
    console.log(`Begin subtractNode`)
    var tempSubArray = []
    for (j in subArray){
        if (parseInt(j) !== parseInt(subIndx)){
            tempSubArray.push(subArray[j])
        }
    }

    console.log(`End subtractNode`)
    return tempSubArray
})

const validArrangement = ((checkArray) => {
    console.log(`Start validArrangement`)
    var newArray
    for (i = 1; i < checkArray.length - 1; i++){
        newArray = subtractNode(checkArray, i)
        console.log(`new array to check ${newArray}`)
        var check = isValid(newArray)

        if (check === 'Yes'){
            validArrangements.push(newArray)
        }
        validArrangement(newArray)
    }
    //if yes push into validArrangements then loop through 'nodes' to check if you can remove 
    //if no exit
    console.log(`End validArrangement`)
    return validArrangements.length
})

const sortArray = ((arryToSort) => {
    // get array sorted to make checking easier
    var sortedNum = []

    for (a in arryToSort) {
        sortedNum[arryToSort[a]] = arryToSort[a]
    }

    var trimmedArray = []

    trimmedArray.push(0)

    for (b in sortedNum) {
        trimmedArray.push(parseInt(sortedNum[b]))
    }

    trimmedArray.push(parseInt(trimmedArray[trimmedArray.length-1] + 3))

    return trimmedArray
})


// fs.readFile('./Day10/input.txt', function(err, data) {
fs.readFile('./Day10/intput-test.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    var srtedArray = sortArray(array)

    //first one is valid
    validArrangements.push(srtedArray)

    console.log(`first array: ${srtedArray}`)
    numArrays = validArrangement(srtedArray)

    console.log(numArrays)
})
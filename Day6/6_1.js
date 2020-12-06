var fs = require('fs')

//
var arrayIndex = 0

// to contain to total answers
var questionsAns = 0

const arrayChunck = ((array, indx) => {
    var tempArray = []
    //console.log(`indx = ${indx}`)

    for (i=indx; i < array.length; i++) {
        //console.log(`i = ${i}`)
        if (array[i] !== ''){
            arrayIndex = i
            tempArray.push(array[i].toString())
        } else {
            arrayIndex = i
            return tempArray
        }
    }
   
})

const countAns = ((ansArray) => {
    var tempAns = []
    for (j in ansArray) {
        var tempSplit = ansArray[j].toString().split('')
        for (k in tempSplit){
            tempAns.push(tempSplit[k])
        }
    }
    console.log(`length orig: ${tempAns.length}`)
    const unique = Array.from(new Set(tempAns))
    console.log(`length new ${unique.length}`)
    return unique.length
})

fs.readFile('./Day6/input.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    while (arrayIndex < array.length) {
    // while (arrayIndex < 9){
        var answerChunck = arrayChunck(array, arrayIndex)
        // console.log(answerChunck)
        questionsAns = parseInt(questionsAns)+parseInt(countAns(answerChunck))
        arrayIndex++
    }

    console.log(`Questions Answered: ${questionsAns}`)
})
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

const getOccurrence = ((srcArray, value) => {
    var count = 0;
    srcArray.forEach((v) => (v === value && count++));
    return count;
})

const countAns = ((ansArray) => {
    var tempAns = []
    // var ansArray = []
    var tempCount = 0
    var cntAnsArray = []

    for (j in ansArray) {
        var tempSplit = ansArray[j].toString().split('')
        for (k in tempSplit){
            tempAns.push(tempSplit[k])
        }
    }
    //sort
    // console.log(tempAns)
    tempAns.sort()
    // console.log(tempAns)
    //just for checking
    const unique = Array.from(new Set(tempAns))
    // console.log(`tempAns length: ${tempAns.length} - unique length: ${unique.length}`)
    
    //loop through unique to count occurances in tempAns
    for (v in unique){
        tempCount = getOccurrence(tempAns, unique[v])
        if (tempCount === ansArray.length){
            cntAnsArray.push(tempCount)
        }
    }
    //count each value
    //if count === ansArray.length
        // add to total

    return cntAnsArray.length
})

fs.readFile('./Day6/input.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    while (arrayIndex < array.length) {
    // while (arrayIndex < 4){
        var answerChunck = arrayChunck(array, arrayIndex)
        // console.log(answerChunck)
        questionsAns = parseInt(questionsAns)+parseInt(countAns(answerChunck))
        arrayIndex++
    }

    console.log(`Questions Answered: ${questionsAns}`)
})
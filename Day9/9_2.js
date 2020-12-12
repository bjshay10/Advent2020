var fs = require('fs')
const target = 507622668
//target 507622668

const checkSum = ((beg, end, pArray) => {
    var arrayTotal = 0
    var arrayToSort = []
    for (c = beg; c <= end; c ++)    {
        arrayTotal = parseInt(arrayTotal) + parseInt(pArray[c])
        arrayToSort.push(pArray[c])
    }

    if (arrayTotal === target) {
        arrayToSort.sort()
        console.log(`${arrayToSort[0]} + ${arrayToSort[arrayToSort.length - 1]}`)
        var temp = parseInt(arrayToSort[0]) + parseInt(arrayToSort[arrayToSort.length - 1])
        console.log(` = ${temp}`)
        return 'M'
    } else {
        return 'N'
    }
})

fs.readFile('./Day9/input.txt', function(err, data) {
// fs.readFile('./Day9/input-test.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    for (a in array){
        for (b=a; b<array.length; b++){
            if (b===a){
                //can't add up to target
            } else {
                var begA = a
                var endB = b
                var matches = checkSum(begA, endB, array)
                if (matches === 'M') {
                    var final = parseInt(begA) + parseInt(endB) + 2
                    console.log(`${begA} + ${endB} = ${final}`)
                }
            }
        }
    }


    var results = checkSum(target, array)


})
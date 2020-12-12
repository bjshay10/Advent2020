var fs = require('fs')


const checkSum = ((toCheck, pArray) => {

    console.log(`in checksum`)
    console.log(`to check ${toCheck}: array to check ${pArray}`)
    var checkArraySums = []
    for (c in pArray) {
        for (d in pArray){
            if (c === d) {

            } else {
                var temp = parseInt(pArray[c].toString()) + parseInt(pArray[d].toString())
                checkArraySums.push(temp)
            }
        }
    }

    if(checkArraySums.toString().indexOf(toCheck) > -1){
        // console.log(`found missing`)
        return 'Yes'
        
    } else {
        // console.log(checkArraySums.toString().indexOf(toCheck.toString()))
        return 'No'
    }
})

fs.readFile('./Day9/input.txt', function(err, data) {
// fs.readFile('./Day9/input-test.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    for (a in array) {
        var tempArray = []
        if (a < 25){

        } else {
            var tempB = a-25
            for (b = tempB; b < a; b++){
                tempArray.push(array[b])
            }

            // console.log(tempArray)
            
            // console.log(`Check ${array[a]}`)

            var result = checkSum(array[a], tempArray)

            if (result == 'No'){
                console.log(`FOUND BAD ONE`)
                break;
            } else {
                console.log(`continue`)
            }
        }       
    }
})
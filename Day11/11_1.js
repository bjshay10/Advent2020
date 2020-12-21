var fs = require('fs')

var changes = 0
var lastRound = 0

const changeSeatState = ((seatArray) => {

})

// fs.readFile('./Day11/input.txt', function(err, data) {
fs.readFile('./Day11/input-test.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    // split rows
    var splitRows = []
    var newSeatState = []
    for (a in array) {
        splitRows.push(array[a].toString().split(''))
        newSeatState.push(array[a].toString().split(''))
    }

    //new array round 1
    // Sconsole.log(splitRows)

    for (r in splitRows) {
        for (spot in splitRows[r]){
            if (splitRows[r][spot] === 'L') {
                newSeatState[r][spot] = '#'
                changes++
            } else {
                newSeatState[r][spot] = splitRows[r][spot]
            }
        }
    }

    console.log(`changes=${changes}`)

    do{

        //loop through array
        for (x = 0; x < newSeatState[x].length-1; x++){
            for (y = 0; y < newSeatState[x].length; y++){
                //x = row
                //y = column
                
                //if x === 0 then don't check above
                //if x === newSeatState.length don't check below
                if (x === 0) {
                    //if y = 0 don't check to the left
                    //if y = newSeatState.length don't check to the right
                } else if (x === newSeatState.length){
                    //if y = 0 don't check to the left
                    //if y = newSeatState.length don't check to the right
                } else {
                    //if y = 0 don't check to the left
                    //if y = newSeatState.length don't check to the right
                }

            }
        }

        status = 'Done'
    } while (status != 'Done')
})
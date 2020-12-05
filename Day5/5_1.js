var fs = require('fs')

const findRow = ((rowString) => {
    var rowArray = rowString.split('')
    // console.log(rowArray)
    var rowMin = 0
    var rowMax = 127
    var row = ''
    // temp result of math.floor to figure out the middle 
    var tempMidRange = 0
    
    for (i in rowArray){
        // console.log(`rowMin = ${rowMin}, rowMax = ${rowMax}, row = ${row}, seatRange = ${rowArray[i].toString()}`)
        if (rowArray[i].toString() === 'F'){
            tempMidRange = Math.floor((rowMax - rowMin) / 2)
            rowMin = rowMin
            rowMax = tempMidRange + rowMin
        } else {
            tempMidRange = Math.floor((rowMax - rowMin) / 2) + 1
            // console.log(`${i}-${tempMidRange}`)
            rowMin = rowMin + tempMidRange
            rowMax = rowMax
            // console.log(`${rowMin}-${rowMax}`)
        }
    }
    // console.log(`rowMin = ${rowMin}, rowMax = ${rowMax}`)
    return rowMin
}) 

const findSeat = ((seatString) => {
    var seatArray = seatString.split('')
    // console.log(seatArray)
    var seatMin = 0
    var seatMax = 7
    var seat = ''
    var tempMidRange = 0

    for (i in seatArray) {
        if (seatArray[i].toString() === 'L'){
            tempMidRange = Math.floor((seatMax-seatMin) / 2)
            seatMin = seatMin
            seatMax = tempMidRange + seatMin
        } else {
            tempMidRange = Math.floor((seatMax-seatMin) / 2) + 1
            seatMin = seatMin + tempMidRange
            seatMax = seatMax    
        }
    }

    return seatMin
})

fs.readFile('./Day5/input.txt', function(err, data) {
    if(err) throw err
    var array = data.toString().split('\r\n')
    var seatID = 0
    var maxSeat = 0
    // console.log(array)

    //front 0 - 63
    //back 64 - 127

    // for (i=0;i<1;i++){
    for (i in array) {
        seatID = 0
        //first 7 are to find row
        var rowData = array[i].toString().substring(0,7)
        // console.log(rowData)
        var row = findRow(rowData)
        // console.log(row)
        //last 3 to find seat
        var seatData = array[i].toString().substring(7,10)
        var seat = findSeat(seatData)
        
        //seat id
        seatID = (row * 8) + seat
        // console.log(`seatID is ${seatID}`)
        if (seatID > maxSeat){
            maxSeat = seatID
        }
        
    }
    console.log(`the max SeatID is ${maxSeat}`)
})
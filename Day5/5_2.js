var fs = require('fs')

const findRow = ((rowString) => {
    var rowArray = rowString.split('')
    // console.log(rowArray)
    var rowMin = 0
    var rowMax = 127
    var row = ''
    // temp result of math.floor to figure out the middle 
    var tempMidRange = 0
    
    for (j in rowArray){
        // console.log(`rowMin = ${rowMin}, rowMax = ${rowMax}, row = ${row}, seatRange = ${rowArray[i].toString()}`)
        if (rowArray[j].toString() === 'F'){
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
    // console.log(`from findSeat seatString = ${seatString}`)
    var seatArray = seatString.split('')
    // console.log(`findSeat broken into array ${seatArray}`)
    var seatMin = 0
    var seatMax = 7
    var seat = ''
    var tempMidRange = 0

    for (k in seatArray) {
        if (seatArray[k].toString() === 'L'){
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
    var seatArray = []
    // console.log(array)

    //front 0 - 63
    //back 64 - 127
    for (i in array) {
    // for (i=0; i < 1; i++){
        // console.log(`full array ${array[i]}`)
        seatID = 0
        //first 7 are to find row
        var rowData = array[i].toString().substring(0,7)
        // console.log(`look up row data ${rowData}`)
        var row = findRow(rowData)
        //console.log(row)
        //last 3 to find seat
        // console.log(`array data again ${array[i]}`)
        // console.log(`array substring ${array[i].toString().substring(7,10)}`)
        var seatData = array[i].toString().substring(7,10)
        var seat = findSeat(seatData)
        
        //seat id
        
        seatID = (row * 8) + seat
        // console.log(`${row} * 8 + ${seat} = ${seatID}`)
        //console.log(`seatID is ${seatID}`)
        seatArray.push(seatID)

        // if (seatID > maxSeat){
        //     maxSeat = seatID
        // }
        
    }
    seatArray.sort()
    // for (l in seatArray){
    var seat1 = 0
    var seat2 = 0
    var seatL = 0
    var seatL1 = 0
    for (l = 0; l < seatArray.length; l++){
        seat1 = seatArray[l]
        seat2 = seatArray[l+1]
        if ((seat2 - seat1) > 1) {
            if ((seat2 - seat1) > 10){

            }else{
                console.log(`${seat1}, ${seat2}`)
            }
        }

    }
})
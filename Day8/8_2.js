var fs = require('fs')

var accumulator = 0
var instructionRan = []
var accumulatorValues = []
var jmpNopArray = []

const listJmpNop = ((jmpnopArray) => {
    for (b in jmpnopArray) {
        var tempjmpnop = jmpnopArray[b].toString().split(' ')
        var tempInstJmpNop = tempjmpnop[0].toString()
        if (tempInstJmpNop === 'jmp'){
            jmpNopArray.push(b)
        } else if (tempInstJmpNop === 'nop'){
            jmpNopArray.push(b)
        }
    }
    return
})

const wasInstRan = ((instIndex) => {
    // console.log(instIndex)
    for (z in instructionRan) {
        if (instructionRan[z] === instIndex){
            return 'Yes'
        }
    }
    // if (instructionRan.toString().indexOf(instIndex) > -1){
    //     //console.log(`Instruction index ${instIndex} already executed.  accumlator = ${accumulator}`)
    //     return 'Yes'
    // } else {
    //     return 'No'
    // }
    return 'No'
})

const parseInstructions = ((instArray, switchIndx) => {
    // for (a in array) {
    var indx = 0
    var status = 'working'
    instructionRan = []

    do {

        console.log(accumulator)
        //console.log(`Current Instruction: ${instArray[indx]}`)
        
        //check to see if index is in instructionRan

        var ran = wasInstRan(indx)

        if (ran === 'Yes'){
            status = 'done'
            break;
        }

        
        
        //get  acc, jmp, or nop
        var temp = instArray[indx].toString().split(' ')
        var tempInst = temp[0].toString()
        var tempPM = temp[1].toString().substring(0,1)
        var tempAmnt = temp[1].toString().substring(1)
        //console.log(`Instruction is '${tempInst}', + or - '${tempPM}', amount = '${tempAmnt}'`)
        instructionRan.push(indx)
        
        if (parseInt(indx) == parseInt(switchIndx)){
            // console.log(`was ${tempInst}`)
            if (tempInst === 'jmp') {
                tempInst = 'nop'
            } else if (tempInst === 'nop') {
                tempInst = 'jmp'
            }
            // console.log(`is ${tempInst}`)
        }


        switch(tempInst) {
            case 'acc':
                //console.log(`accumulator start = ${accumulator}`)
                
                if (tempPM === '+'){
                    accumulator = parseInt(accumulator) + parseInt(tempAmnt)
                } else {
                    accumulator = parseInt(accumulator) - parseInt(tempAmnt)
                }
                //console.log(`accumulator end = ${accumulator}`)
                indx++
                //console.log(`instruction indx is now ${indx}`)
                
                break;
            case 'jmp':
                //console.log(`indx start = ${indx}`)
                if (tempPM === '+'){
                    indx = parseInt(indx) + parseInt(tempAmnt)
                } else {
                    indx = parseInt(indx) - parseInt(tempAmnt)
                }
               // console.log(`indx end = ${indx}`)
                break;
            case 'nop':
                indx++
                break;
        }
        
        
        if (indx == 636){
            return 'finished'
        }
    } while (status !== 'done')

    return status

})

fs.readFile('./Day8/input.txt', function(err, data) {
    // fs.readFile('./Day8/input-test.txt', function(err, data) {
    accumulator = 0

    if(err) throw err

    var array = data.toString().split('\r\n')

    listJmpNop(array)
    for (c in jmpNopArray) {
        accumulator = 0
        const finalInst = parseInstructions(array, jmpNopArray[c])
        // console.log(`c= ${c} and finalInst = ${finalInst}`)
        if (finalInst == 'finished') {
            console.log(`accumulator == ${accumulator}`)
            break
        }
    }
    
    
    // console.log(`accumulator = ${accumulator}`)
    // console.log(accumulatorValues)
})
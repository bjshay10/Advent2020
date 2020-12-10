const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants')
var fs = require('fs')

var accumulator = 0
var instructionRan = []
var accumulatorValues = []

const wasInstRan = ((instIndex) => {
    if (instructionRan.toString().indexOf(instIndex) > -1){
        console.log(`Instruction index ${instIndex} already executed.  accumlator = ${accumulator}`)
        return 'Yes'
    } else {
        return 'No'
    }
})

const parseInstructions = ((instArray) => {
    // for (a in array) {
    var indx = 0
    var status = 'working'

    do {

        console.log(`Current Instruction: ${instArray[indx]}`)
        
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
        console.log(`Instruction is '${tempInst}', + or - '${tempPM}', amount = '${tempAmnt}'`)
        instructionRan.push(indx)
        switch(tempInst) {
            case 'acc':
                console.log(`accumulator start = ${accumulator}`)
                
                if (tempPM === '+'){
                    accumulator = parseInt(accumulator) + parseInt(tempAmnt)
                } else {
                    accumulator = parseInt(accumulator) - parseInt(tempAmnt)
                }
                console.log(`accumulator end = ${accumulator}`)
                indx++
                console.log(`instruction indx is now ${indx}`)
                
                break;
            case 'jmp':
                console.log(`indx start = ${indx}`)
                if (tempPM === '+'){
                    indx = parseInt(indx) + parseInt(tempAmnt)
                } else {
                    indx = parseInt(indx) - parseInt(tempAmnt)
                }
                console.log(`indx end = ${indx}`)
                break;
            case 'nop':
                indx++
                break;
        }
     

    } while (status !== 'done')

    return status

})

fs.readFile('./Day8/input.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    const finalInst = parseInstructions(array)

    console.log(accumulator)
    console.log(accumulatorValues)
})
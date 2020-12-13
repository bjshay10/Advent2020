var fs = require('fs')

var accumulator = 0
var instructionRan = []
var accumulatorValues = []
var jmpIndxs = []
var nopIndxs = []

const getJmpNop = ((instIndexs) => {
    
    for (x in instIndexs){
        var tempIndexs = instIndexs[x].toString().split(' ')
        var tempInstIndx = tempIndexs[0].toString()
        var tempPMs = tempIndexs[1].toString().substring(0,1)
        var tempAmnts = tempIndexs[1].toString().substring(1)
        
        if (tempInstIndx.toString() === 'jmp'){
            jmpIndxs.push(x)
        } else if (tempInstIndx.toString() === 'nop') {
            nopIndxs.push(x)
        } else {

        }
    }

    // console.log(`jmpLen = ${jmpIndxs.length}; noplen = ${nopIndxs.length}`)

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

const parseInstructions = ((instArray, jIndx, nIndx) => {
    // for (a in array) {
    var indx = 0
    var status = 'working'
    instructionRan = []

    do {

        //console.log(`Current Instruction: ${instArray[indx]}`)
        
        //check to see if index is in instructionRan

        var ran = wasInstRan(indx)

        // if (ran === 'Yes'){
        //     status = 'done'
        //     // console.log('done')
        //     break;
        // }

        // console.log(`${indx}: ${instArray.length}`)
        if (parseInt(indx) == parseInt(instArray.length))
        {
            status = 'final'
            console.log(`final`)
            return status
        } else if (ran === 'Yes'){
            status = 'done'
            // console.log('Done')
            break;
        }
        
        //get  acc, jmp, or nop
        var temp = instArray[indx].toString().split(' ')
        var tempInst = temp[0].toString()
        var tempPM = temp[1].toString().substring(0,1)
        var tempAmnt = temp[1].toString().substring(1)
        //console.log(`Instruction is '${tempInst}', + or - '${tempPM}', amount = '${tempAmnt}'`)
        instructionRan.push(indx)
        if (indx === jIndx){
            tempInst = 'nop'
        }
        if (indx === nIndx) {
            tempInst = 'jmp'
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
     

    } while (status !== 'done')

    return status

})

fs.readFile('./Day8/input.txt', function(err, data) {
    // fs.readFile('./Day8/input-test.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    getJmpNop(array)

    for (j=0;j<jmpIndxs.length;j++){
        for (n=0;n<nopIndxs.length;n++){
            accumulator = 0
            // console.log(`checking ${jmpIndxs[j]} and ${nopIndxs[n]}`)
            var finalInst = parseInstructions(array, jmpIndxs[j],  nopIndxs[n])
            if (finalInst == 'found') {
                console.log(`Found!`)
                break;
            }
        }
    }

    
    console.log(`j = ${j}: n = ${n}`)
    console.log(`accumulator = ${accumulator}`)
    // console.log(accumulatorValues)
})
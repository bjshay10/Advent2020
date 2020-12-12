var fs = require('fs')

var processed = []
var accumulator = 0
var a = 0
var total = 0

const executeInst = ((inst, pm, amnt) => {
    console.log(a)
    var tAcc = 0

    if (processed.indexOf(a) > -1) {
        console.log(`finished ${a}`)
        a = 999999
        return
    }

    switch (inst) {
        case 'acc':
            if (pm.toString() == '+'){
                accumulator = parseInt(accumulator) + parseInt(amnt)
                // console.log(accumulator)
            } else {
                accumulator = parseInt(accumulator) - parseInt(amnt)
                // console.log(accumulator)
            }
            // console.log(accumulator)
            // console.log(a)
            processed.push(a);
            a++;
            break;
        case 'jmp':
            processed.push(a)
            if (pm.toString() == '+'){
                a = parseInt(a) + parseInt(amnt);
            } else {
                a = parseInt(a) - parseInt(amnt); 
            }
            break;
        case 'nop':
            processed.push(a);    
            a++
            break;
    }
})

fs.readFile('./HDay8/input.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')
    
    do {
        //parse the string
        // console.log(array[a])
        var temp = array[a].toString().split(' ')
        var instruction = temp[0]
        var P_M = temp[1].toString().substring(0,1)
        var amount = temp[1].toString().substring(1)

        // console.log(`Instruction is: ${instruction}, plus/minus ${P_M}, ammount = ${amount}`)

        executeInst(instruction, P_M, amount)
        //console.log(`processed = ${processed}`)
    } while (a < 999999)


    for (b in processed) {
        total = parseInt(total) + parseInt(processed[b])
    }
    console.log(`the total should be ${total}`)
})
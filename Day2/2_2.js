var fs = require('fs')

function checkPW (first, second, letter, password, valid) {
    // check character at first positon
    var check1 = false
    if (letter === password.charAt(first-1)){
        check1 = true
        //console.log(check1)
    } else {
        check1 = false
    }

    // check character at second postion
    var check2 = false
    if (letter === password.charAt(second-1)){
        check2 = true
        //console.log(check2)
    } else {
        check2 = false
    }

    if (check1 !== check2){
        return true
    } else {
        return false
    }
}

fs.readFile('./Day2/input.txt', function(err, data) {
    if(err) throw err
    var array = data.toString().split('\r\n')
    var validPW = 0

    for (i in array){
        var initStr = array[i]
        var policy = initStr.slice(0,initStr.indexOf(':'))
        var password = initStr.slice(initStr.indexOf(':')+2)
        
        var first = policy.slice(0,policy.indexOf('-'))
        var second = policy.slice(policy.indexOf('-') + 1, policy.indexOf(' '))
        var letter = policy.slice(policy.indexOf(' ') + 1)
             
        
        var goodPW = checkPW(first, second, letter, password)
        if (goodPW) {
            validPW ++
        } 
    }

    console.log(validPW)
})
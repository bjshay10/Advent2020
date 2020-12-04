var fs = require('fs')

function checkPW (first, second, letter, password, valid) {
    //get 1st condition
    var test1 = (password.match(new RegExp(letter,'g')) || []).length
    if (test1 >= first){
        var test2 = (password.match(new RegExp(letter,'g')) || []).length
        if (test2 <= second){
            //console.log(password)
        } else {
            return false
        }
    } else {
        return false
    }
    return true
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
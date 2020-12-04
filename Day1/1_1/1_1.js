// const lineReader = require('readline').createInterface({
//     input: require('fs').createReadStream('./Day1/input/input.txt')
// })

// var mult2020 = 0
// var valArray = []

// lineReader.on('line', (line) => {
//     valArray.push(line)
// })

var fs = require('fs')

fs.readFile('./Day1/input/input.txt', function(err, data) {
    if(err) throw err
    var array = data.toString().split("\n")
    for(i in array) {
        var tempI = array[i]
        //console.log(tempI)
        for (j in array) {
           temp2020 = parseInt(tempI) + parseInt(array[j])
           if (temp2020 === 2020){
               var tempMult = parseInt(tempI) * parseInt(array[j])
               console.log(tempMult)
           }        
        }
    }
})



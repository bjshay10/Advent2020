var fs = require('fs')

fs.readFile('./Day1/input/input.txt', function(err, data) {
    if(err) throw err
    var array = data.toString().split("\n")
    for(i in array) {
        var tempI = parseInt(array[i])

        for (j in array) {
           var tempJ = parseInt(array[j])
           
           for (k in array) {
               var tempK = parseInt(array[k])

               var temp2020 = tempI + tempJ + tempK
               if (temp2020 === 2020){
                   var tempMult = tempI * tempJ * tempK
                   console.log(tempMult)
                   break
               }
           }
           
        }
    }
})
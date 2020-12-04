var fs = require('fs')

var TreeCount = 0
var X = 0
var Y = 0
var complete = 'No'

const checkTree = (async(str, done) => {
    
})

const move = (async (array, Xloc, Yloc, done) => {
    //move 1 down
    X = Xloc+1
    //check to see if it exists
    if (!array[X]) {
        complete='Yes'
        return done
    }
        
    //move 3 right
    Y = Yloc + 3
    
    //check to see if it's there
    if (!array[X][Y]) {
        var len = array[X].toString().length
        var newY = Y - len
        Y = newY
    } else {
    }

    if (array[X][Y] === '#'){
        TreeCount++
    }

   return done
})


fs.readFile('./Day3/input.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    //TreeCount = function call to parse teh array?
    console.log(`Fist Postion: ${array[X][Y]}`)
    while (complete !== 'Yes'){
         //Move to new position
        move(array, X, Y)
    }

    console.log(TreeCount)   
})
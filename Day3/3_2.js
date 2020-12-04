var fs = require('fs')

var TreeCount = 0
var X = 0
var Y = 0
var complete = 'No'

const checkTree = (async(str, done) => {
    
})

const move31 = (async (array, Xloc, Yloc, done) => {
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

const move11 = (async (array, Xloc, Yloc, done) => {
    //move 1 down
    X = Xloc+1
    //check to see if it exists
    if (!array[X]) {
        complete='Yes'
        return done
    }
        
    //move 3 right
    Y = Yloc + 1
    
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

const move51 = (async (array, Xloc, Yloc, done) => {
    //move 1 down
    X = Xloc+1
    //check to see if it exists
    if (!array[X]) {
        complete='Yes'
        return done
    }
        
    //move 3 right
    Y = Yloc + 5
    
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

const move71 = (async (array, Xloc, Yloc, done) => {
    //move 1 down
    X = Xloc+1
    //check to see if it exists
    if (!array[X]) {
        complete='Yes'
        return done
    }
        
    //move 3 right
    Y = Yloc + 7
    
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

const move12 = (async (array, Xloc, Yloc, done) => {
    //move 1 down
    X = Xloc+2
    //check to see if it exists
    if (!array[X]) {
        complete='Yes'
        return done
    }
        
    //move 3 right
    Y = Yloc + 1
    
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
    // console.log(`Fist Postion: ${array[X][Y]}`)
    while (complete !== 'Yes'){
         //Move to new position
        move31(array, X, Y)
    }
    var TC31 = TreeCount
    TreeCount = 0
    X = 0
    Y = 0
    complete = 'No'
    
    while (complete !== 'Yes'){
            //Move to new position
        move11(array, X, Y)
    }
    var TC11 = TreeCount
    TreeCount = 0
    X = 0
    Y = 0
    complete = 'No'

    while (complete !== 'Yes'){
        //Move to new position
        move51(array, X, Y)
    }
    var TC51 = TreeCount
    TreeCount = 0
    X = 0
    Y = 0
    complete = 'No'

    while (complete !== 'Yes'){
        //Move to new position
        move71(array, X, Y)
    }
    var TC71 = TreeCount
    TreeCount = 0
    X = 0
    Y = 0
    complete = 'No'

    while (complete !== 'Yes'){
        //Move to new position
        move12(array, X, Y)
    }
    var TC12 = TreeCount
    TreeCount = 0
    X = 0
    Y = 0
    complete = 'No'

    var Total = TC31 * TC11 * TC51 * TC71 * TC12
    console.log(`Toal: ${TC31} * ${TC11} * ${TC51} * ${TC71} * ${TC12} = ${Total}`)
})
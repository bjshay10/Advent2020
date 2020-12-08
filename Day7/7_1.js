var fs = require('fs')

var bagArray = []
var unique = []
const searchBags = ((srcArray, searchFor) => {
    // console.log(srcArray.length)
    // console.log(searchFor)
    
    for (a in srcArray){
        if (srcArray[a].toString().indexOf(searchFor) > -1){
            //holding split bag to get bag name
            var temp1 = srcArray[a].toString().split(' bags contain ')
            if (temp1[0].toString().indexOf('shiny gold') == -1){
                bagArray.push(temp1[0])
            }
        }
    }
})

fs.readFile('./Day7/input.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    // console.log(array)

    searchBags(array,'shiny gold')


    console.log(`after gold ${bagArray.length}`)

    for (b in bagArray){
        searchBags(array, bagArray[b])
    }

    console.log(`after search2 ${bagArray.length}`)

    const unique = Array.from(new Set(bagArray))

    console.log(`after unique ${unique.length}`)

    for (c in unique){
        searchBags(array, unique[c])
    }

    const unique2 = Array.from(new Set(bagArray))

    console.log(`after unique2 ${unique2.length}`)

    for (d in unique2){
        searchBags(array, unique2[d])
    }

    const unique3 = Array.from(new Set(bagArray))

    console.log(`after unique3 ${unique3.length}`)

    for (e in unique3){
        searchBags(array, unique3[e])
    }

    const unique4 = Array.from(new Set(bagArray))

    console.log(`after unique4 ${unique4.length}`)

    for (f in unique4){
        searchBags(array, unique4[f])
    }

    const unique5 = Array.from(new Set(bagArray))

    console.log(`after unique5 ${unique5.length}`)

    for (g in unique5){
        searchBags(array, unique5[g])
    }

    const unique6 = Array.from(new Set(bagArray))

    console.log(`after unique '6' ${unique6.length}`)

    for (h in unique6){
        searchBags(array, unique6[h])
    }

    const unique7 = Array.from(new Set(bagArray))

    console.log(`after unique '7' ${unique7.length}`)

    for (i in unique7){
        searchBags(array, unique7[i])
    }

    const unique8 = Array.from(new Set(bagArray))

    console.log(`after unique '7' ${unique8.length}`)

    
    for (j in unique8){
        searchBags(array, unique8[j])
    }

    const unique9 = Array.from(new Set(bagArray))

    console.log(`after unique '9' ${unique9.length}`)
})
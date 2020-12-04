var fs = require('fs')

//current location in array lookup
var arrayIndex = 0
var validPP = 0

const passportChunck = ((array, indx) => {
    var tempArray = []
    //console.log(`indx = ${indx}`)

    for (i=indx; i < array.length; i++) {
        //console.log(`i = ${i}`)
        if (array[i] !== ''){
            arrayIndex = i
            tempArray.push(array[i].toString())
        } else {
            arrayIndex = i
            return tempArray
        }
    }
   
})

const checkPP = ((array) => {
    var byr = 0
    var iyr = 0
    var eyr = 0
    var hgt = 0
    var hcl = 0
    var ecl = 0
    var pid = 0
    var CID = 0

    for (i in array){
        byr += (array[i].indexOf('byr') > -1 ? 1 : 0)
        iyr += (array[i].indexOf('iyr') > -1 ? 1 : 0)
        eyr += (array[i].indexOf('eyr') > -1 ? 1 : 0)
        hgt += (array[i].indexOf('hgt') > -1 ? 1 : 0)
        hcl += (array[i].indexOf('hcl') > -1 ? 1 : 0)
        ecl += (array[i].indexOf('ecl') > -1 ? 1 : 0)
        pid += (array[i].indexOf('pid') > -1 ? 1 : 0)
        CID += (array[i].indexOf('cid') > -1 ? 1 : 0)
    }
    
    var validppcheck = byr + iyr + eyr + hgt + hcl + ecl + pid

    if (validppcheck === 7) {
        return true
    } else {
        return false
    }
    return 0
})

fs.readFile('./Day4/input.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    // console.log(array)

    // Valid Codes CID Optional
    // byr (Birth Year)
    // iyr (Issue Year)
    // eyr (Expiration Year)
    // hgt (Height)
    // hcl (Hair Color)
    // ecl (Eye Color)
    // pid (Passport ID)
    // cid (Country ID)
    
    //get first passport chunck
    while (arrayIndex < array.length){
    //while (arrayIndex < 19){
        var ppChunck = passportChunck(array, arrayIndex)
        console.log(ppChunck)
        var ppValid = checkPP(ppChunck)
        if (ppValid === true){
            validPP++
        }
        arrayIndex++
    }

    console.log(`Number of valid passports ${validPP}`)
})
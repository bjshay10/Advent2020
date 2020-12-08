var fs = require('fs')

//current location in array lookup
var arrayIndex = 0
var validPP = 0

const indivualItems = ((array) =>{
    var tempArray = []
    for (i in array) {
        var temp = array[i].toString().split(' ')
        for (j in temp) {
            tempArray.push(temp[j])
        }
    }
    return tempArray
})

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
    var tempHCL
    var tempBYR
    var tempIYR
    var tempEYR
    var tempHGT
    var tempECL
    var tempPID

    for (i in array){
        // byr += (array[i].indexOf('byr') > -1 ? 1 : 0)
        if (array[i].indexOf('byr') > -1){
            tempBYR = array[i].toString().split(':')
            if ( (tempBYR[1].length === 4) && (parseInt(tempBYR[1]) >= 1920) && (parseInt(tempBYR[1]) <= 2002)) {
                    byr = 1
            }
        }
               
        // iyr += (array[i].indexOf('iyr') > -1 ? 1 : 0)
        if (array[i].indexOf('iyr') > -1){
            tempIYR = array[i].toString().split(':')
            if ( (tempIYR[1].length === 4) && (parseInt(tempIYR[1]) >= 2010) && (parseInt(tempIYR[1]) <= 2020)) {
                    iyr = 1
            }
        }
        
        // eyr += (array[i].indexOf('eyr') > -1 ? 1 : 0)
        if (array[i].indexOf('eyr') > -1){
            tempEYR = array[i].toString().split(':')
            if ( (tempEYR[1].length === 4) && (parseInt(tempEYR[1]) >= 2020) && (parseInt(tempEYR[1]) <= 2030)) {
                    eyr = 1
            }
        }
        // hgt += (array[i].indexOf('hgt') > -1 ? 1 : 0)
        if (array[i].indexOf('hgt') > -1){
            tempHGT = array[i].toString().split(':')
            var H = tempHGT[1].toString().substring(0, tempHGT[1].length-2)
            if(tempHGT[1].indexOf('cm') > -1){
                if ((H >= 150) && (H <= 193)){
                    hgt = 1 
                }
            } else {
                if ((H >= 59) && (H <= 76)){
                    hgt = 1
                }
            }
        }
        // hcl += (array[i].indexOf('hcl') > -1 ? 1 : 0)
        //(Hair Color) - a # followed by exactly six characters 0-9 or a-f.
        if (array[i].indexOf('hcl') > -1) {
            tempHCL = array[i].toString().split(':')
            if (tempHCL[1].substring(0,1) === '#'){
                var tempHCLVal = tempHCL[1].toString().split(':')
                tempHCLVal = tempHCLVal.toString().substring(1,tempHCLVal.toString().length)
                const regex = /\w{6}$/
                const found = tempHCL.toString().match(regex)
                if (found){
                    hcl = 1
                }
            }
        }
        // ecl += (array[i].indexOf('ecl') > -1 ? 1 : 0)
        // (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
        if (array[i].indexOf('ecl') > -1) {
            tempECL = array[i].toString().split(':')
            if (tempECL[1].toString() === 'amb'){
                ecl = 1
            } else if (tempECL[1].toString() === 'blu') {
                ecl = 1
            } else if (tempECL[1].toString() === 'brn') {
                ecl = 1
            } else if (tempECL[1].toString() === 'gry') {
                ecl = 1
            } else if (tempECL[1].toString() === 'grn') {
                ecl = 1
            } else if (tempECL[1].toString() === 'hzl') {
                ecl = 1
            } else if (tempECL[1].toString() === 'oth') {
                ecl = 1
            } else {

            }
        }
            
        // pid += (array[i].indexOf('pid') > -1 ? 1 : 0)
        //(Passport ID) - a nine-digit number, including leading zeroes.
        if (array[i].indexOf('pid') > -1) {
            tempPID = array[i].toString().split(':')
            var tempPIDVal = tempPID[1].toString().split(':')
            tempPIDVal = tempPIDVal.toString().substring(1,tempPIDVal.toString().length)
            const regex = /\w{9}$/
            const found = tempPID[1].toString().match(regex)
            //console.log(tempPIDVal)
            if (found){
                pid = 1
            }
            
        }
    }
    
    var validppcheck = byr + iyr + eyr + hgt + hcl + ecl + pid
    // console.log(`byr:${byr},iyr:${iyr},eyr:${eyr},hgt:${hgt},hcl:${hcl},ecl:${ecl},pid:${pid}`)
    if (validppcheck === 7) {        
        return true
    } else {
        return false
    }
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
    // while (arrayIndex < 19){
        var ppChunck = passportChunck(array, arrayIndex)
        // console.log(ppChunck)
        //break ppChunck into individual items
        var itemsArray = indivualItems(ppChunck)
        // console.log(itemsArray)
        var ppValid = checkPP(itemsArray)
        if (ppValid === true){
            validPP++
        }
        arrayIndex++

        var itemsArray = indivualItems(ppChunck)
    }

    console.log(`Number of valid passports ${validPP}`)  
})
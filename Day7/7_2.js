var fs = require('fs')
var bagArray = []
var countBags = []
var toCount = []
const searchBags = (async (searchArray, searchFor) => {
    for (a in searchArray){
        if (searchArray[a].toString().indexOf(searchFor) > -1){
            //holding split bag to get bag name
            var temp1 = searchArray[a].toString().split(' bags contain ')

            if (temp1[0].toString().indexOf(searchFor) > -1){
                bagArray.push(temp1[1])
            }
        }
    }
})

fs.readFile('./Day7/input.txt', function(err, data) {
    if(err) throw err

    var array = data.toString().split('\r\n')

    searchBags(array,'shiny gold')

    var firstRoundBags = bagArray.toString().split(', ')
    //console.log(firstRoundBags)
    for (b in firstRoundBags){
        countBags.push(firstRoundBags[b].toString().substring(0,1))
        var temp = firstRoundBags[b].toString().substring(2, firstRoundBags[b].toString().length-6)
        toCount.push(temp)
    }
    console.log(`to count: ${toCount.length}`)

    bagArray = []

    for (c in toCount){
        searchBags(array, toCount[c])
    }

    // console.log(bagArray)

    var secondRound = bagArray.toString().split(', ')

    for (c in secondRound) {
        if (secondRound[c].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(secondRound[c].toString().substring(0,1))
            var temp2 = secondRound[c].toString().substring(2, secondRound[c].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    bagArray = []

    for (d in toCount){
        searchBags(array, toCount[d])
    }

    // console.log(bagArray)

    var thirdRound = bagArray.toString().split(', ')

    for (e in thirdRound) {
        if (thirdRound[e].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(thirdRound[e].toString().substring(0,1))
            var temp2 = thirdRound[e].toString().substring(2, thirdRound[e].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    bagArray = []

    for (f in toCount){
        searchBags(array, toCount[f])
    }

    // console.log(bagArray)

    var fourthRound = bagArray.toString().split(', ')

    for (g in fourthRound) {
        if (fourthRound[g].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(fourthRound[g].toString().substring(0,1))
            var temp2 = fourthRound[g].toString().substring(2, fourthRound[g].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    bagArray = []

    for (h in toCount){
        searchBags(array, toCount[h])
    }

    // console.log(bagArray)

    var fifthRound = bagArray.toString().split(', ')

    for (i in fifthRound) {
        if (fifthRound[i].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(fifthRound[i].toString().substring(0,1))
            var temp2 = fifthRound[i].toString().substring(2, fifthRound[i].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    bagArray = []

    for (j in toCount){
        searchBags(array, toCount[j])
    }

    // console.log(bagArray)

    var sixthhRound = bagArray.toString().split(', ')

    for (k in sixthhRound) {
        if (sixthhRound[k].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(sixthhRound[k].toString().substring(0,1))
            var temp2 = sixthhRound[k].toString().substring(2, sixthhRound[k].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    bagArray = []

    for (l in toCount){
        searchBags(array, toCount[l])
    }

    // console.log(bagArray)

    var seventhRound = bagArray.toString().split(', ')

    for (m in seventhRound) {
        if (seventhRound[m].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(seventhRound[m].toString().substring(0,1))
            var temp2 = seventhRound[m].toString().substring(2, seventhRound[m].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    bagArray = []

    for (n in toCount){
        searchBags(array, toCount[n])
    }

    // console.log(bagArray)

    var eigth = bagArray.toString().split(', ')

    for (o in eigth) {
        if (eigth[o].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(eigth[o].toString().substring(0,1))
            var temp2 = eigth[o].toString().substring(2, eigth[o].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    //------
    bagArray = []

    for (p in toCount){
        searchBags(array, toCount[p])
    }

    // console.log(bagArray)

    var ninthR = bagArray.toString().split(', ')

    for (q in ninthR) {
        if (ninthR[q].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(ninthR[q].toString().substring(0,1))
            var temp2 = ninthR[q].toString().substring(2, ninthR[q].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    bagArray = []

    for (r in toCount){
        searchBags(array, toCount[r])
    }

    // console.log(bagArray)

    var tenthR = bagArray.toString().split(', ')

    for (s in tenthR) {
        if (tenthR[s].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(tenthR[s].toString().substring(0,1))
            var temp2 = tenthR[s].toString().substring(2, tenthR[s].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    //------
    bagArray = []

    for (t in toCount){
        searchBags(array, toCount[t])
    }

    // console.log(bagArray)

    var eleventh = bagArray.toString().split(', ')

    for (u in eleventh) {
        if (eleventh[u].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(eleventh[u].toString().substring(0,1))
            var temp2 = eleventh[u].toString().substring(2, eleventh[u].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    bagArray = []

    for (v in toCount){
        searchBags(array, toCount[v])
    }

    // console.log(bagArray)

    var twelve = bagArray.toString().split(', ')

    for (w in twelve) {
        if (twelve[w].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(twelve[w].toString().substring(0,1))
            var temp2 = twelve[w].toString().substring(2, twelve[w].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    //------
    bagArray = []

    for (x in toCount){
        searchBags(array, toCount[x])
    }

    // console.log(bagArray)

    var thirteen = bagArray.toString().split(', ')

    for (y in thirteen) {
        if (thirteen[y].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(thirteen[y].toString().substring(0,1))
            var temp2 = thirteen[y].toString().substring(2, thirteen[y].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    bagArray = []

    for (z in toCount){
        searchBags(array, toCount[z])
    }

    // console.log(bagArray)

    var fourteen = bagArray.toString().split(', ')

    for (aa in fourteen) {
        if (fourteen[aa].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(fourteen[aa].toString().substring(0,1))
            var temp2 = fourteen[aa].toString().substring(2, fourteen[aa].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)

    bagArray = []

    for (z in toCount){
        searchBags(array, toCount[z])
    }

    // console.log(bagArray)

    var fifteen = bagArray.toString().split(', ')

    for (aa in fifteen) {
        if (fifteen[aa].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(fifteen[aa].toString().substring(0,1))
            var temp2 = fifteen[aa].toString().substring(2, fifteen[aa].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)


    bagArray = []

    for (z in toCount){
        searchBags(array, toCount[z])
    }

    // console.log(bagArray)

    var sixteen = bagArray.toString().split(', ')

    for (aa in sixteen) {
        if (sixteen[aa].toString() === 'no other bags.'){
            //skip
        } else {
            countBags.push(sixteen[aa].toString().substring(0,1))
            var temp2 = sixteen[aa].toString().substring(2, sixteen[aa].toString().length-6)
            toCount.push(temp2)
        }
    }

    console.log(`to count: ${toCount.length}`)
    //------
    var sum = 0
    for (zzz in countBags){
        sum += parseInt(countBags[zzz])
    }
    console.log(sum)
})
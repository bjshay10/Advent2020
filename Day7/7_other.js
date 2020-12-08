const fs = require('fs');

// parse rules
const rules = Array.from(
        fs.readFileSync('./Day7/input.txt', 'utf-8')
        .matchAll(/^\s*(.*) bags contain (.*)\.\s*$/gm)
    )
    .map(ruleParts => ({
        color: ruleParts[1],
        contents: ruleParts[2]
            .split(/,/g)
            .filter(ruleContent => !/no other bags/.test(ruleContent))
            .map(ruleContent => {
                const contentParts = ruleContent.match(/^\s*(\d+) (.*) bags?\.?\s*$/);
                return {
                    count: parseInt(contentParts[1]),
                    color: contentParts[2]
                };
            })
    })
);

// create map to easily lookup rules
const rulesMap = rules.reduce((ruleMap, rule) => {
    ruleMap.set(rule.color, rule);
    return ruleMap;
}, new Map());

function canBagContainColor(containerColor, targetColor) {
    const rule = rulesMap.get(containerColor);

    // if rule does not exist for color, then can't contain
    if (!rule) {
        console.log(`No rule for color ${ containerColor }.`);
        return false;
    }

    // check if bag can contain directly
    if (rule.contents.some(content => content.color === targetColor)) {
        return true;
    }

    // check if bag can contain eventually
    if (rule.contents.some(content => canBagContainColor(content.color, targetColor))) {
        return true;
    }

    // if we get here, then this bag cannot contain the color
    return false;
}

const colorsThatContainShinyGold = new Set(
    rules
    .filter(rule => canBagContainColor(rule.color, 'shiny gold'))
    .map(rule => rule.color)
);
console.log(`Part 1: number of bag colors that can contain shiny gold = ${ colorsThatContainShinyGold.size }`);

function countNestedBags(color) {
    const rule = rulesMap.get(color);
    return rule.contents.reduce((count, content) => count + (content.count * (1 + countNestedBags(content.color))), 0);
}

const bagsInsideShinyGold = countNestedBags('shiny gold');
console.log(`Part 2: number of bags required inside shiny gold = ${ bagsInsideShinyGold }`);

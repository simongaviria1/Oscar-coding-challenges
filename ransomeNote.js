// // You are given a magazine and a ransom note. Write an algorithm to determine if the magazine contains sufficient characters to cut out and construct the ransom note.  

let ransom = 'You are given a magazine and a ransom note. Write an algorithm to determine if the magazine contains sufficient characters to cut out and construct the ransom note.'

let magazine = 'You are given a magazine pnd a ransom note. Write an algorithm to determine if the magazine contains sufficient characters to cut out and construct the ransom note.'

const isEnough = (ransom, magazine) => {
    if (magazine.length < ransom.length) {
        return false;
    }

    ransom = ransom.toLowerCase();
    magazine = magazine.toLowerCase();

    let letterCount = constructLetterCount(ransom)

    for (let i = 0; i < magazine.length; i++) {
        if (letterCount[magazine[i]] === 0) {
            console.log('delete')
            delete letterCount[magazine[i]]
        }
        else if (letterCount[magazine[i]]) {
            letterCount[magazine[i]]--
        }
    }


    return isOkay(letterCount);
}

constructLetterCount = (ransom) => {
    let obj = {}

    for (let i = 0; i < ransom.length; i++) {
        if (obj[ransom[i]]) {
            obj[ransom[i]]++
        } else if (!obj[ransom[i]]) {
            obj[ransom[i]] = 1
        }
    }

    return obj
}

const isOkay = (obj) => {

    for (let key in obj) {
        if (obj[key] > 0) {
            return false
        }
    }

    return true
}

console.log(isEnough(ransom, magazine))
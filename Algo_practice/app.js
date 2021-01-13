// Write a function `findWordFrequencies` that takes in a sentence (string), and returns an object with each word as a key, with a value of how many times that word appears in the sentence.
// eg: `{ I: 1, love: 1, lamp: 1 }`

const findWordFrequencies = (sentence) => {
    sentArray = sentence.split(' ')
    const result = {}
    sentArray.forEach(word=>{
        if(result[word.toLowerCase()]){
            result[word.toLowerCase()]++
        } else {
            result[word.toLowerCase()] = 1;
        }
    })
    return result
}
console.log(findWordFrequencies('I love chocolate just as much as I love candy and I hate candy'))
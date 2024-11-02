function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function greetName(Name){
    return(`Your name is: ${Name}`)
}
module.exports = {generateRandomNumber,
                  greetName
                }
            

/* TO-DO LIST FOR SPACE MESSAGES
- Create random selector function 
- Create combining function
- Combine into output

*/ 

const firstMsg = ['I am an astronaut', 'I am an alien', "I am Elon Musk"]
const secondMsg  = ['work','live']
const thirdMsg = ['Mars','Venus','Jupiter']

const getRandomString = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
}

const sendMessage = () => {
    let first = getRandomString(firstMsg)
    let second = getRandomString(secondMsg)
    let third = getRandomString(thirdMsg)

    return `${first}, and I ${second} on ${third}`

}

console.log(sendMessage())

document.getElementById('die').addEventListener('click', rollDie)
const h1 = document.getElementById('die')

function rollDie() {
    let rollValue = Math.floor(Math.random() * 6 + 1)
    // display random number to console for testing
    console.log(rollValue)
    h1.innerText = rollValue
    return rollValue
}

// Test random number is between 1 and 6
// for (let i = 0; i < 100; i++) {
//     let result = rollDie()
//     if (result <= 0 || result >= 7) {
//         console.log('roll failed!')
//         break
//     }
// }
const NAME = prompt("Enter name", "user")
document.getElementsByClassName('label')[0].innerHTML = NAME

let pobeda 
let count = 1
let sum_user = 0
let sum_computer = 0

const ARR1 = ['6','7','8','9', '10', 'J', 'Q', 'K', 'A']
const ARR2 = {'6': 6 , '7': 7, '8': 8, '9': 9, '10':10, 'J':2, 'Q':3, 'K': 4, 'A': 11} 

function foo(){
    if (count ===4){
        return 
    }

    const index1 = Math.floor(Math.random() * ARR1.length)
    const index2 = Math.floor(Math.random() * ARR1.length)

    const card1 = ARR1[index1]
    const card2 = ARR1[index2]

    document.getElementsByClassName('img')[0].children[0].src = `img/${card1}.png`
    document.getElementsByClassName('img')[1].children[0].src = `img/${card2}.png`

    sum_user += ARR2[card1]
    sum_computer += ARR2[card2]

    document.getElementsByClassName('score')[0].innerHTML = sum_user
    document.getElementsByClassName('score')[1].innerHTML = sum_computer

    count += 1

    if (count === 4){ 
        if (sum_user > sum_computer){
            pobeda = "ПЕРЕМОГА USER"
        } else if (sum_computer > sum_user){
            pobeda = "ПЕРЕМОГА COMPUTER"
        } else {
            pobeda = "НІЧИЯ"
        }
    }

    document.getElementsByClassName('resu')[0].textContent = pobeda 
}

const res = prompt("Введіть ім'я", "user")
document.getElementsByClassName('label')[0].innerHTML = res
    let result1  
    let result2
    let pobeda 
    let count = 0 
    let user = 0
    let computer = 0
    let winner = document.getElementsByClassName('resu')[0];
function foo(){
    if(count == 3)
    {
        document.getElementsByClassName('resu')[0].textContent = pobeda
        winner.style.animation = 'rotate 2s linear infinite'
        return 
    }
    
    result1 = Math.floor(Math.random() *10)
    result2 = Math.floor(Math.random() *10)
    document.getElementsByClassName('circle')[0].textContent = result1
    document.getElementsByClassName('circle')[1].textContent = result2
    if (result1 > result2){
        user+=1
        pobeda = "ПЕРЕМОГА USER"
    }
    else if (result1 < result2){
        computer+=1
        pobeda = "ПЕРЕМОГА COMPUTER"
    }
    else{
        user+=1
        computer+=1
        pobeda = "НІЧИЯ"
    }


    document.getElementsByClassName('score')[0].textContent = user
    document.getElementsByClassName('score')[1].textContent = computer
    count+=1

    if(count == 3)
    {
        document.getElementsByClassName('resu')[0].textContent = pobeda
        winner.style.animation = 'rotate 2s linear infinite'
        return 
        
    }
}

const wrapper = document.createElement('div')
wrapper.className = 'wrapper'
document.body.appendChild(wrapper)

const text1 = document.createElement('h3')
text1.textContent = "Шарік"
wrapper.appendChild(text1)

const ball = document.createElement('div')
ball.className = 'ball'
wrapper.appendChild(ball)

const text2 = document.createTextNode('')
text2.id = 'text2'
ball.appendChild(text2)

const text3 = document.createElement('h4')
text3.textContent = "Питання"
wrapper.appendChild(text3)

const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Введіть питання'
input.id = 'question'
wrapper.appendChild(input)

const button = document.createElement('button')
button.textContent = "Віповідь на ваше питання"
wrapper.appendChild(button)
button.onclick = foo

function foo(){
    
    const reply = ['Так','Як я бачу - так','Безумовно','Швидше за все','Поки не ясно','Спробуй ще раз','Запитай пізніше','Навіть не думай','Перспективи не дуже добрі','Шанси 50/50','Ні','Будь ласка НІ!!!']
    const ques = document.getElementById('question').value.trim()

    if (ques === '')
    {
        text2.textContent = 'Введіть питання'
    }
    else if (!ques.endsWith('?'))
    {
        text2.textContent = 'В кінці є знак питання?'
    }
    else
    {
        const rand = Math.floor(Math.random()*reply.length)
        text2.textContent = reply[rand]
    }
    

}




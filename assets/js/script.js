// alert("mettre au format téléphone !!")

// word of the day
let word_of_the_day = document.querySelector('.word_of_the_day')
let button_bot_open = document.querySelector('#open')
let button_bot_close = document.querySelector('#close')

button_bot_open.addEventListener('click', () => {

    word_of_the_day.style.display = 'flex'
})

button_bot_close.addEventListener('click', () => {

    word_of_the_day.style.display = 'none'
})

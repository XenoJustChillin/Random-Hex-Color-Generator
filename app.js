let changeColor = document.getElementById('changeColor')
let colorbox = document.getElementById('colorbox')

let lettersAndNumbers = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9]
let color = '#'

changeColor.addEventListener('click', () => {   
    for(let i = 0; i < 6; i++){
        let randomNum = Math.floor(Math.random() * 15)
        color += lettersAndNumbers[randomNum]
        console.log(color)
    }
    colorbox.style.fontSize = '18px'
    colorbox.style.background = color
    
    colorbox.textContent = color
    color = '#'
})
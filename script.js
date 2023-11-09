let countdown = document.querySelector('.countdown')

document.querySelector('.start-countdown').addEventListener("click",()=>{
    let number = document.querySelector('#number').value
    countdown.innerHTML = number
    setInterval(function() {
        if (number === 0){
            return
        }else {
            countdown.innerHTML = number -= 1
        }
    }, 1000)
})

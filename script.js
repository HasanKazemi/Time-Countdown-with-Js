// catch the Countdown Date elements
const CountdownDay = document.querySelector("#day")
const CountdownMonth = document.querySelector("#month")
const CountdownYear = document.querySelector("#year")
const CountdownHour = document.querySelector("#hour")
const CountdownMinute = document.querySelector("#minute")
const CountdownSecond = document.querySelector("#second")

document.querySelector(".start-countdown").addEventListener("click", ()=>{
    // get month index by minus from month number
    let monthIndex = CountdownMonth.value - 1
    // set Countdown Date
    let countdownDate = new Date(CountdownYear.value, monthIndex, CountdownDay.value, CountdownHour.value, CountdownMinute.value, CountdownSecond.value)

    // update Countdown every second
    let time = setInterval(() => {
        // get the current date and time
        let now = new Date().getTime()
        // Calculate the time remaining until the countdown date
        let distance = countdownDate - now

        // Calculate the days, hours, minutes, and seconds remaining
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
        // display the countdown
        const showCountdown = document.querySelector(".countdown")
        showCountdown.innerHTML = `${days}d ${hours}:${minutes}':${seconds}"`
        showCountdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

        // if the countdown is over, display a message
        if (distance < 0) {
            clearInterval(time)
            showCountdown.innerHTML = "Expired"
        }
    }, 1000);
})

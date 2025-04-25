const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")
const dateEl = document.getElementById("date")
const themeToggleBtn = document.getElementById("theme-toggle")
const themeIcon = themeToggleBtn.querySelector("i")

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle("light-theme")
    const isLight = document.body.classList.contains("light-theme")
    themeIcon.className = isLight ? "fas fa-sun" : "fas fa-moon"
    localStorage.setItem("theme", isLight ? "light" : "dark")
}

// Load saved theme
const savedTheme = localStorage.getItem("theme")
if (savedTheme === "light") {
    toggleTheme()
}

themeToggleBtn.addEventListener("click", toggleTheme)

function updateClock() {
    const now = new Date()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()
    let ampm = "AM"

    if (h >= 12) {
        ampm = "PM"
        h = h === 12 ? 12 : h - 12
    }
    h = h === 0 ? 12 : h

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    hourEl.innerText = h
    minuteEl.innerText = m
    secondEl.innerText = s
    ampmEl.innerText = ampm

    // Update date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    }
    dateEl.innerText = now.toLocaleDateString(undefined, options)
}

// Initial update
updateClock()

// Update every second
setInterval(updateClock, 1000)

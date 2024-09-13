
const noppa = document.querySelector('noppa')


const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

document.getElementById("noppa").addEventListener('click', () => {
    const result = getRandomIntNumberInRange(1, 6)

    if (result === 1) {
        noppa = document.getElementById("noppa").src="./images/1.png.png"
        return noppa
    }

    if (result === 2) {
        noppa = document.getElementById("noppa").src="./images/2.png.png"
        return noppa
    }

    if (result === 3) {
        noppa = document.getElementById("noppa").src="./images/3.png.png"
        return noppa
    }

    if (result === 4) {
        noppa = document.getElementById("noppa").src="./images/4.png.png"
        return noppa
    }

    if (result === 5) {
        noppa = document.getElementById("noppa").src="./images/5.png.png"
        return noppa
    }

    if (result === 6) {
        noppa = document.getElementById("noppa").src="./images/6.png.png"
        return noppa
    }
})


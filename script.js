const text = document.querySelector(".changeText");
const getHub = document.querySelector(".hub");

setInterval(() => {
    var w = window.innerWidth
    var h = window.innerHeight

    getHub.innerHTML = w + ' , ' + h 
}, 4000)

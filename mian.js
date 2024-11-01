let section = document.querySelector(".continer");
let btngo = document.querySelector(".one");
let btnback = document.querySelector(".two");
let progress = 0;

btngo.onclick = function() {
    if (progress < 55) {
        progress += 19;
        updateProgress();
    }
}

btnback.onclick = function() {
    if (progress > 0) {
        progress -= 19;
        updateProgress();
    }
}

function updateProgress() {
    document.documentElement.style.setProperty('--progress-width', `${progress}%`);
}

updateProgress();
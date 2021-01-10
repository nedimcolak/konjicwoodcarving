let timer = setInterval(watch, 1000);

function watch(){
    let now = new Date();
    let time = now.toLocaleTimeString();

    let timeEl = document.getElementById('time');
    timeEl.innerHTML = time;
}

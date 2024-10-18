const tools = document.querySelector(".message");
const dates = document.querySelector(".myDate");
let time;
timeinterval = true;
dates.addEventListener("change", function (e) {
    e.preventDefault();
    clearInterval(time);
    let temp = new Date(dates.value);
    count(temp);
})
function count(d) {
    function counting() {
        let tl = (left(d));
        if (tl.total <= 0) {
            timeinterval = false;
        }
        for (let p in tl) {
            let el = tools.querySelector("." + p);
            if (el) {
                el.innerHTML = tl[p];
            }
        }
    }
    counting();
    if (timeinterval) {
        time = setInterval(counting, 1000);
    }
    else {
        clearInterval(time);
    }

}
function left(d) {
    let current = new Date();
    let timeLeft = Date.parse(d) - Date.parse(current);
    let sec = Math.floor((timeLeft / 1000) % 60);
    let min = Math.floor((timeLeft / (1000 * 60) % 60));
    let hour = Math.floor(((timeLeft / (1000 * 60 * 60)) % 60));
    let day = Math.floor((timeLeft / (1000 * 60 * 60 * 24)));
    return {
        "seconds ": sec,
        "minutes ": min,
        "hours ": hour,
        "days ": day,
        "total ": timeLeft
    }
    console.log(day);
    console.log(hour);
    console.log(min);
    console.log(sec);


}
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const date = document.getElementById('date');


name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

function showtime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todaydate = today.toDateString();


    const ampm = hour > 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;


    time.innerHTML = `${addzero(hour)}<span>:</span>${addzero(min)}<span>:</span>${addzero(sec)} ${ampm}`;

    date.innerHTML = `${todaydate}`
    setTimeout(showtime, 1000);

}

function addzero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setGreet() {

    let today = new Date();
    let hour = today.getHours();

    if (hour < 12) {
        greeting.innerHTML = "Good Morning";
        document.body.style.backgroundImage =
            'url("../Images/1Morning.jpg")';
    }
    else if (hour < 18) {
        greeting.innerHTML = "Good Afternoon";
        document.body.style.backgroundImage = 'URL("../Images/2afternoon.jpg")'
    }
    else {
        greeting.innerHTML = "Good Evening";
        document.body.style.backgroundImage = 'URL("../Images/3night.jpg")'
        document.body.style.color = 'white'
    }
}

function getName() {
    if (localStorage.getItem("myData") === null) {
        name.innerHTML = "[Enter Name]";
    } else {
        name.innerHTML = localStorage.getItem("myData");
    }
}

function setName(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem("myData", e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem("myData", e.target.innerHTML);
    }
}


getName();
showtime();
setGreet();


// Selected dom items
const currentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

// new variable declaration
let alarmTime,
isAlarmSet,
rington = new Audio("assets/modi_modi_ringtone.mp3");


// add drop down at select for more options
for(let i = 12; i>0; i--)
{
    let hour = i < 10 ? `0${i}` : `${i}`;
    let option = `<option value="${hour}">${hour}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 59; i>=0; i--)
{
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 2; i>0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

// gatting current time every milisecond it runs and update current time
setInterval(() => {
    let date = new Date(),
    H = date.getHours(),
    M = date.getMinutes(),
    S = date.getSeconds(),

    ampm = "AM";

    if(H >= 12) {
        H = H - 12;
        ampm = "PM";
    }

        H = H == 0? (H = 12) : H;
        H = H < 10? "0" + H : H;
        M = M < 10? "0" + M : M;
        S = S < 10? "0" + S : S;

        // Update currentTime
        currentTime.innerHTML = `${H}:${M}:${S} ${ampm}`;

    if(alarmTime === `${H}:${M} ${ampm}`)
    {
        rington.play();
        rington.loop = true;
    }
 }, 1000);

function setAlarm(){
    if(isAlarmSet){
        alarmTime = "";
        rington.pause();
        content.classList.remove("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return(isAlarmSet = false);
    }
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if(
        time.includes("Hour") ||
        time.includes("Minute") ||
        time.includes("AM/PM")
    ) {
        return alert("Please, select a valid time to set Alarm");
    }

    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);

const currentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

let alarmTime,
isAlarmSet,
rington = new Audio("")

for(let i = 12; i>=0; i--)
{
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
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

        currentTime.innerHTML = `${H}:${M}:${S} ${ampm}`;

    if(alarmTime === `${H}:${M} ${ampm}`)
    {
        rington.play();
        rington.loop = true;
    }
});
# ⏰ Alarm Clock Web App

A simple Alarm Clock built using **HTML, CSS, and JavaScript**.  
Users can set an alarm for a specific time, and the app will play a ringtone when the time is reached.

## 🚀 Features
- ⏱ Real-time digital clock
- 🔔 Set alarm for a specific time
- 🔕 Clear / Cancel alarm
- 🎵 Plays ringtone when alarm time is reached
- 📱 Simple and responsive UI

## 🛠️ Tech Stack
- HTML
- CSS
- JavaScript (Vanilla JS)

## 📂 Project Structure
```
alarm-clock/
│
├── index.html
├── style.css
├── script.js
├── alarm.mp3
└── README.md
```

## 💡 How It Works

- The app continuously updates the current time using JavaScript.
- When a user selects a time and clicks **Set Alarm**, the selected time is stored.
- Every second the program checks:
  
```javascript
if(currentTime === alarmTime){
   ringtone.play();
}
```

- When both times match, the alarm ringtone starts playing.


## 📌 Future Improvements
- Add multiple alarms
- Add snooze feature
- Allow custom alarm sounds
- Save alarms using LocalStorage

## 👨‍💻 Author
Ajahar Uddin

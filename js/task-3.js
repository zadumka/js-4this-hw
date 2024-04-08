'use strict';

const profile = {
    username: "Jacob",
    playTime: 300,
    getInfo() {
        return `"${profile.username} has ${profile.playTime} active hours!"`
    },
    changeUsername(newName) {
profile.username = newName;
    },
    updatePlayTime(hours) {
        profile.playTime = profile.playTime + hours;
    }

}





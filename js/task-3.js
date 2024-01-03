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


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"



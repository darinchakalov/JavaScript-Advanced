function createAssemblyLine() {
    let result = {};

    result.hasClima = (obj) => {
        obj["temp"] = 21;
        obj["tempSettings"] = 21;
        obj["adjustTemp"] = () => {
            if (obj.temp < obj.tempSettings) {
                obj.temp++;
            } else if (obj.temp > obj.tempSettings) {
                obj.temp--;
            }
        };
    };
    result.hasAudio = (obj) => {
        obj.currentTrack = {
            name: null,
            artist: null,
        };
        obj.nowPlaying = () => {
            console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
        };
    };
    result.hasParktronic = (obj) => {
        obj.checkDistance = (distance) => {
            if (distance < 0.1) {
                console.log(`Beep! Beep! Beep!`);
            } else if (distance >= 0.1 && distance < 0.25) {
                console.log(`Beep! Beep!`);
            } else if (distance >= 0.25 && distance < 0.5) {
                console.log(`Beep!`);
            } else {
                console.log(``);
            }
        }
    }
    return result    
}
createAssemblyLine();
const myCar = { make: "Toyota", model: "Avensis" };
    result.hasClima(myCar);
    console.log(myCar.temp);
    myCar.tempSettings = 18;
    myCar.adjustTemp();
    console.log(myCar.temp);

    result.hasAudio(myCar);
    myCar.currentTrack = {
        name: "Never Gonna Give You Up",
        artist: "Rick Astley",
    };
    myCar.nowPlaying();

    result.hasParktronic(myCar)
    myCar.checkDistance(0.4)
    myCar.checkDistance(0.2)
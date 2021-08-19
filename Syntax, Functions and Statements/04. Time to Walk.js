function solve(steps, footprint, speed) {
    let distance = steps * footprint;
    let speedInMeters = speed / 3.6;
    let timeInSeconds = distance / speedInMeters;
    let breaks = Math.floor(distance / 500);
    let totalTime = Math.round(breaks * 60 + timeInSeconds);
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor(totalTime / 60) - hours * 60;
    let seconds = totalTime % 60;
    let printHours = hours < 10 ? "0" + hours : hours;
    let printMinutes = minutes < 10 ? "0" + minutes : minutes;
    let printSeconds = seconds < 10 ? "0" + seconds : seconds;
    console.log(`${printHours}:${printMinutes}:${printSeconds}`);
}
solve(40, 0.6, 5);
solve(2564, 0.7, 5.5);

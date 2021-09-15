function attachEventsListeners() {
    let daysButton = document.querySelector("#daysBtn");
    let hoursButton = document.querySelector("#hoursBtn");
    let minutesButton = document.querySelector("#minutesBtn");
    let secondsButton = document.querySelector("#secondsBtn");

    daysButton.addEventListener("click", function () {
        document.querySelector("#hours").value = Number(document.querySelector("#days").value) * 24;
        document.querySelector("#minutes").value = Number(document.querySelector("#days").value) * 1440;
        document.querySelector("#seconds").value = Number(document.querySelector("#days").value) * 86400;
    });
    hoursButton.addEventListener("click", function () {
        document.querySelector("#days").value = Number(document.querySelector("#hours").value) / 24;
        document.querySelector("#minutes").value = Number(document.querySelector("#hours").value) * 60;
        document.querySelector("#seconds").value = Number(document.querySelector("#hours").value) * 3600;
    });
    minutesButton.addEventListener("click", function () {
        document.querySelector("#days").value = Number(document.querySelector("#minutes").value) / 1440;
        document.querySelector("#hours").value = Number(document.querySelector("#minutes").value) / 60;
        document.querySelector("#seconds").value = Number(document.querySelector("#minutes").value) * 60;
    });
    secondsButton.addEventListener("click", function () {
        document.querySelector("#days").value = Number(document.querySelector("#seconds").value) / 86400;
        document.querySelector("#hours").value = Number(document.querySelector("#seconds").value) / 3600;
        document.querySelector("#minutes").value = Number(document.querySelector("#seconds").value) / 60;
    });
}

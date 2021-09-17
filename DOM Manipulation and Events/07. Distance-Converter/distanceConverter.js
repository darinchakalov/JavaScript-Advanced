function attachEventsListeners() {
    let from = document.querySelector("#inputUnits");
    let to = document.querySelector("#outputUnits");
    let input = document.querySelector("#inputDistance");
    let convert = document.querySelector("#convert");

    convert.addEventListener("click", () => {
        let inputToMeters = 0;
        let result = 0;
        let inputValue = input.value;
        switch (from.selectedIndex) {
            case 0:
                inputToMeters = inputValue * 1000;
                break;
            case 1:
                inputToMeters = inputValue;
                break;
            case 2:
                inputToMeters = inputValue * 0.01;
                break;
            case 3:
                inputToMeters = inputValue * 0.001;
                break;
            case 4:
                inputToMeters = inputValue * 1609.34;
                break;
            case 5:
                inputToMeters = inputValue * 0.9144;
                break;
            case 6:
                inputToMeters = inputValue * 0.3048;
                break;
            case 7:
                inputToMeters = inputValue * 0.0254;
                break;
        }
        switch (to.selectedIndex) {
            case 0:
                result = inputToMeters / 1000;
                break;
            case 1:
                result = inputToMeters;
                break;
            case 2:
                result = inputToMeters / 0.01;
                break;
            case 3:
                result = inputToMeters / 0.001;
                break;
            case 4:
                result = inputToMeters / 1609.34;
                break;
            case 5:
                result = inputToMeters / 0.9144;
                break;
            case 6:
                result = inputToMeters / 0.3048;
                break;
            case 7:
                result = inputToMeters / 0.0254;
                break;
        }
        document.querySelector("#outputDistance").value = result
    });
}

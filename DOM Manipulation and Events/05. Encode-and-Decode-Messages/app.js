function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('button')[0];
    let decodeBtn = document.querySelectorAll('button')[1];
    let encodeText = document.querySelectorAll(`textarea`)[0];
    let decodeText = document.querySelectorAll(`textarea`)[1];

    encodeBtn.addEventListener("click", encodeIt);
    decodeBtn.addEventListener("click", decodeIt);

    function encodeIt() {
        let encodeMsg = "";
        for (let i = 0; i < encodeText.value.length; i++) {
            encodeMsg += String.fromCharCode(ascii(encodeText.value[i]) + 1);
        }
        encodeText.value = "";
        decodeText.value = encodeMsg;
    }

    function decodeIt() {
        let decodeMsg = "";
        for (let i = 0; i < decodeText.value.length; i++) {
            decodeMsg += String.fromCharCode(ascii(decodeText.value[i]) - 1);
        }
        decodeText.value = decodeMsg;
    }

    function ascii(char) {
        return char.charCodeAt(0);
    }
}
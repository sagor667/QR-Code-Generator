const inputText = document.getElementById("inputText");
const QRCode = document.getElementById("QRCode");
const generateCode = document.getElementById("generateCode");

generateCode.addEventListener("click", () => {
    if (inputText.value.length > 0) {
        QRCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
        QRCode.classList.add("showCode");
    }
    else {
        inputText.classList.add("error");
        setTimeout(() => {
            inputText.classList.remove("error");
        }, 1000);
    }
});
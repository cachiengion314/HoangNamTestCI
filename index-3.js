function randomNumberFromAToB(a, b) {
    let randomRange = Math.floor(Math.random() * (b - a));
    return randomRange + a;
}
let maxGuess = 3;
let isTypeWrong = false;
let textType = document.getElementById(`text_type`);
let rollNumberBtn = document.getElementById(`roll_number_btn`);
rollNumberBtn.onclick = () => {
    let randomNumber = Number(textType.value);
    if (randomNumber > 10 || randomNumber < 1) {
        alert(`Bạn đã nhập sai, vui lòng nhập lại`);
        isTypeWrong = true;
    }
    if (!isTypeWrong) {
        let proRandomNumber = randomNumberFromAToB(1, 10);
        if (randomNumber == proRandomNumber) {
            alert(`Chúc mừng bạn đã đoán đúng số: ${proRandomNumber}`);
            maxGuess = 3;
        } else {
            alert(`Bạn đã đoán sai, số đúng là: ${proRandomNumber}`);
            maxGuess--;

            alert(`Số lần quay còn lại là: ${maxGuess}`);
            check();
        }
    }
    textType.value = ``;
}

function check() {
    if (maxGuess < 1) {
        alert(`Bạn đã hết 3 lần quay`);
        maxGuess = 3;
        return;
    }
}
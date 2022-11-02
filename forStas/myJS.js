a = Math.floor(Math.random() * 50);
b = Math.floor(Math.random() * 50);
document.getElementById("math").innerHTML = a + " + " + b + " = ";
document.getElementById('button').onclick = function() {
    let sum = document.getElementById('input-id').value;
    if (sum  == a + b) {
        document.getElementById("sum").innerHTML = "Вы ответили правильно!";
    } else {
        document.getElementById("sum").innerHTML = "Вы ответили неправильно!";
    }
}
document.getElementById('button1').onclick = function() {
    window.location.reload();
}


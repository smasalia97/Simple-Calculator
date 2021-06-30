function clear() {
    document.getElementById("result").value = "";
}

// Displays entered value on screen.
function screen(value) {
    let res = document.getElementById("result");
    if (res.value == "undefined") {
        res.value = "";
    }
    res.value += value;
}
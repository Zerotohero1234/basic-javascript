function toCelsius()
{
    let fahrenheit = prompt("Fahrenheit:")
    let celsius = prompt("Celsius")
    let value = (fahrenheit - 32) * 5 / 9
    let valueoffah = (9/5)*celsius+32
    document.getElementById("answer").innerHTML = value.toFixed(2) + "C";
    document.getElementById("answer1").innerHTML = valueoffah.toFixed(2) + "F";
}
toCelsius()
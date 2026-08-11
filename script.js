function convertTemperature() {

    let input = document.getElementById("temperature").value;
    let temperature = parseFloat(input);

    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    let result = document.getElementById("result");

    if (input === "" || isNaN(temperature)) {
        result.innerHTML = "Please enter a temperature!";
        return;
    }

    let celsius;

    // Convert to Celsius
    if (fromUnit === "celsius") {
        celsius = temperature;
    }
    else if (fromUnit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    }
    else if (fromUnit === "kelvin") {
        celsius = temperature - 273.15;
    }

    let converted;

    // Convert Celsius to selected unit
    if (toUnit === "celsius") {
        converted = celsius;
    }
    else if (toUnit === "fahrenheit") {
        converted = (celsius * 9 / 5) + 32;
    }
    else if (toUnit === "kelvin") {
        converted = celsius + 273.15;
    }

    let symbol;

    if (toUnit === "celsius") {
        symbol = "°C";
    }
    else if (toUnit === "fahrenheit") {
        symbol = "°F";
    }
    else {
        symbol = "K";
    }

    result.innerHTML = converted.toFixed(2) + " " + symbol;
}

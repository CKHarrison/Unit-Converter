/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById('convert-btn');
let input = document.getElementById('input-text');
let convertLength = document.getElementById('convert-length');
let convertVolume = document.getElementById('convert-volume');
let convertMass = document.getElementById('convert-mass');

convertBtn.addEventListener('click', function() {
    let inputNum = parseFloat(input.value);
    if(typeof inputNum !== 'number') {
        alert('you must put in a valid number to get a conversion');
        return
    }
    convertLength.textContent = lengthMessage(inputNum);
    convertVolume.textContent = volumeMessage(inputNum);
    convertMass.textContent = massMessage(inputNum);
})

function convertMetersToFeet(num) {
    return (num * 3.281).toFixed(3);
}

function convertLitersToGallons(num) {
    return (num * 0.264).toFixed(3);
}

function convertKilosToPounds(num) {
    return (num * 2.204).toFixed(3);
}

function convertFeetToMeters(num) {
    return (num / 3.281).toFixed(3);
}

function convertGallonsToLiters(num) {
    return (num / 0.264).toFixed(3);
}

function convertPoundsToKilos(num) {
    return (num / 2.204).toFixed(3);
}

function lengthMessage(num) {
    let feet = convertMetersToFeet(num);
    let meters = convertFeetToMeters(num)
    let message = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
    return message;
}

function volumeMessage(num) {
    let gallons = convertLitersToGallons(num);
    let liters = convertGallonsToLiters(num);
    let message = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`;
    return message;
}

function massMessage(num) {
    let pounds = convertKilosToPounds(num);
    let kilos = convertPoundsToKilos(num);
    let message = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`;
    return message;   
}
let fahrenheit = prompt("Enter temp in fahrenheit");

function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
// console.log(convertToCelsius);
// console.log(fahrenheit);

function describeTemperature(fahrenheit) {
  let celsius = convertToCelsius(fahrenheit);
  if (celsius < 0) {
    alert(`${celsius} celsius is very cold`);
  } else if (celsius < 20) {
    alert(`${celsius} celsius is cold`);
  } else if (celsius < 30) {
    alert(`${celsius} celsius is warm`);
  } else if (celsius < 40) {
    alert(`${celsius} celsius is hot`);
  } else if (celsius >= 40) {
    alert(`${celsius} celsius is very hot`);
  }
}
describeTemperature(fahrenheit);

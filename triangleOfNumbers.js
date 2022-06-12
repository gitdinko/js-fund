function triangleOfNumbers(number) {
  for (let row = 1; row <= number; row++) {
    let printline = "";

    for (let col = 1; col <= row; col++) {
      printline += `${row} `;
    }
    console.log(printline);
  }
}
triangleOfNumbers(5);

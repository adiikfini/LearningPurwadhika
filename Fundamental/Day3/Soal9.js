/* Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42 */

const num1 = 18;
const num2 = 27;
const num3 = 42;


function sortThreeNumbers(num1, num2, num3) {
  let terkecil, menengah, terbesar;

  if (num1 >= num2 && num1 >= num3) {
    terbesar = num1;
    // Sekarang bandingkan sisanya (num2 dan num3) untuk mencari yang terkecil
    if (num2 <= num3) {
      terkecil = num2;
      menengah = num3;
    } else {
      terkecil = num3;
      menengah = num2;
    }
  } else if (num2 >= num1 && num2 >= num3) {
    terbesar = num2;
    // Sekarang bandingkan sisanya (num1 dan num3)
    if (num1 <= num3) {
      terkecil = num1;
      menengah = num3;
    } else {
      terkecil = num3;
      menengah = num1;
    }
  } else {
    terbesar = num3;
    // Sekarang bandingkan sisanya (num1 dan num2)
    if (num1 <= num2) {
      terkecil = num1;
      menengah = num2;
    } else {
      terkecil = num2;
      menengah = num1;
    }
  }

  return `Urutannya adalah: ${terkecil}, ${menengah}, ${terbesar}`;
}



function FindLowestMiddleHighest(num1, num2, num3) {
    let lowest = num1; 
    let highest = num1;
    let middle;

    // Find Lowest
    if (num2 < lowest) lowest = num2;
    if (num3 < lowest) lowest = num3;

    // Find Highest
    if (num2 > highest) {
        highest = num2;
    }
    if (num3 > highest) highest = num3;

    // Find Middle
    if (num1 !== lowest && num1 !== highest) middle = num1;
    if (num2 !== lowest && num2 !== highest) middle = num2;
    if (num3 !== lowest && num3 !== highest) middle = num3;

    return `Lowest Number is ${lowest}, Highest Number is ${highest}, and Middle Number is ${middle}`;
}

console.log(sortThreeNumbers(55, 30, 80));
console.log(FindLowestMiddleHighest(55, 30, 80));
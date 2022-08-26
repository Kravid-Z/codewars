function findNumber(start, stop, string) {
  // your solution here
  const numbers = string.split("").map((n) => parseInt(n));
  console.log([...new Set(numbers)])
  const missingNumbers = [];

  const findDigits = (numsArr, index) => {
    const digitsArr = String(index)
      .split("")
      .map((n) => parseInt(n));
    let exists = true;
    for (const digit of digitsArr) {
      const digitIndex = numsArr.indexOf(digit);

      if (digitIndex < 0) {
        exists = false;
        return;
      } else {
        numsArr.splice(digitIndex, 1);
      }
    }
    return exists;
  };

  for (let index = start; index <= stop; index++) {
    const exists = findDigits(numbers, index);
    if (!exists) {
      const digitsMissing = String(index)
        .split("")
        .map((n) => parseInt(n));
      for (const digit of digitsMissing) {
        const nComb = parseInt(digitsMissing.reverse().join(""));
        if (nComb >= start && nComb <= stop) {
          missingNumbers.push(nComb);
        }
      }
    }
  }
  return missingNumbers;
}

let input1 = "1116122137143151617181920849510";
let input2 = "12345678910";
let input3 = "2345678910";
let input4 =
  "681766765770732685779692783756721711709743759695745733690761694782739793716781736699738775689717713773688728735778697725769684741703777698714746757755730706707762710772720771774767701790727788734792768702693786787780729723740737683700705785794724776752748751712682760750742764754722704744708731726791686719758747691687696784749715789718763";
let input5 = "569563567571564562566565570";
console.log([...new Set(input1)])
console.log([...new Set(input2)])
console.log([...new Set(input3)])
console.log([...new Set(input4)])
console.log([...new Set(input5)])
// let input6 = "1116122137143151617181920849510";
// let input7 = "1116122137143151617181920849510";
// let input8 = "1116122137143151617181920849510";
// let input9 = "1116122137143151617181920849510";

const rep1 = findNumber(1, 21, input1); // Expected = [ 12, 21 ]
const rep2 = findNumber(1, 10, input2); // Expected = [ ]
const rep3 = findNumber(1, 10, input3); // Expected = [ 1 ]
const rep4 = findNumber(681, 794, input4); // Expected = [ 735, 753 ]
const rep5 = findNumber(562, 571, input5); // Expected = [ 568 ]
// findNumber(1, 21, string);
// findNumber(1, 21, string);
// findNumber(1, 21, string);
// findNumber(1, 21, string);

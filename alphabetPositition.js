const alphabet = [
  "A",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
const chartcodeAlph = alphabet.map((element) => element.charCodeAt());
console.log(chartcodeAlph);
const phrase = "The sunset sets at twelve o' clock.";
let arrayAlphaIndex = [];
for (const chart of phrase) {
  const index = alphabet.findIndex((letter) => letter === chart.toLowerCase());
  if (index + 1 > 0) {
    arrayAlphaIndex.push(index + 1);
  }
}
arrayAlphaIndex.join(" ");

const alphabetPos = (text) => {
  if (text.match(/[a-z]/gi) !== null) {
    return text
      .toUpperCase() // First transform all to upper case
      .match(/[a-z]/gi) // Match with case insensitive, UpperCases come first in UTF-16
      .map((c) => c.charCodeAt() - 64) // From 65 to 90
      .join(" ");
  } else {
    return "";
  }
};

const resp = alphabetPos(phrase);
console.log(resp);

console.log(
  phrase
    .toUpperCase() // First transform all to upper case
    .match(/[a-z]/gi)
);

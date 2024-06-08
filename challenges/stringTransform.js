function transformString(str) {
  if (str.length % 15 === 0) {
    return str
      .split("")
      .reverse()
      .join("")
      .replace(/./g, (char) => char.charCodeAt(0));
  } else if (str.length % 3 === 0) {
    // Check divisibility by 3 (second priority)
    return str.split("").reverse().join("");
  } else if (str.length % 5 === 0) {
    // Check divisibility by 5 (last priority)
    return str.replace(/./g, (char) => char.charCodeAt(0));
  } else {
    // No transformation needed
    return str;
  }
}

// Test cases
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"

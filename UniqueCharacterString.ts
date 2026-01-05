function nonRepeatingChar(str: string) {
  const charCount = {};
  for (const char of str) {
    if (/^[A-Za-z]+$/.test(char)) {
      charCount[char.toLowerCase()] = (charCount[char.toLowerCase()] || 0) + 1;
    }
  }
  return Object.keys(charCount).find((key) => charCount[key] === 1);
}

const str = "canys SoOuCAn acnyabcdbc defe";
console.log(nonRepeatingChar(str));

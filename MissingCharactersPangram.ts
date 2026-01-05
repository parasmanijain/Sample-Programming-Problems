function missingChars(str: string, strLength: number) {
  let MAX_CHARS = 26;

  // A boolean array to store
  // characters present in string.
  let present = new Array(MAX_CHARS);
  present.fill(false);
  let charsList: string[] = [];

  // Traverse string and mark
  // characters present in string.
  for (let i = 0; i < strLength; i++) {
    if (
      "A".charCodeAt(0) <= str[i].charCodeAt(0) &&
      str[i].charCodeAt(0) <= "Z".charCodeAt(0)
    )
      present[str[i].charCodeAt(0) - "A".charCodeAt(0)] = true;
    else if (
      "a".charCodeAt(0) <= str[i].charCodeAt(0) &&
      str[i].charCodeAt(0) <= "z".charCodeAt(0)
    )
      present[str[i].charCodeAt(0) - "a".charCodeAt(0)] = true;
  }

  // Store missing characters
  // in alphabetic order.
  for (let i = 0; i < 26; i++) {
    if (present[i] == false) {
      charsList.push(String.fromCharCode(i + "a".charCodeAt(0)));
    }
  }
  return charsList;
}

let str = "The quick brown fox jumps over the dog";
let missing = missingChars(str, str.length);
if (missing.length >= 1) {
  for (let i = 0; i < missing.length; i++) {
    console.log(missing[i]);
  }
}

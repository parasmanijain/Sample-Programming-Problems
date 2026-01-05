// JavaScript Code to group anagrams together by using frequency
// as keys

const MAX_CHAR = 26;

// Function to generate hash of word s
function getHash(s: string) {
  let freq: number[] = Array(MAX_CHAR).fill(0);

  // Count frequency of each character
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    freq[ch.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  // Create hash string using join to avoid string concatenation in the loop
  let hashArray: string[] = [];
  for (let i = 0; i < MAX_CHAR; i++) {
    hashArray.push(freq[i].toString());
    hashArray.push("$");
  }

  return hashArray.join("");
}

function anagrams(arr: string[]) {
  let res: any[] = [];
  let mp = new Map();

  for (let i = 0; i < arr.length; i++) {
    let key = getHash(arr[i]);

    // If key is not present in the hash map, add
    // an empty group (array) in the result and
    // store the index of the group in hash map
    if (!mp.has(key)) {
      mp.set(key, res.length);
      res.push([]);
    }

    // Insert the string in its correct group
    res[mp.get(key)].push(arr[i]);
  }
  return res;
}

// Driver Code
let arr1 = ["act", "god", "cat", "dog", "tac"];
let res = anagrams(arr1);

for (let i = 0; i < res.length; i++) {
  let temp = "";
  for (let j = 0; j < res[i].length; j++) {
    temp += res[i][j] + " ";
  }
  console.log(temp);
}

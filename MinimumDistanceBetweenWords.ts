// javascript program to find Minimum Distance
// Between Words of a String

function shortestDistance(s: string[], word1: string, word2: string) {
  if (word1 == word2) return 0;
  let ans = Number.MAX_SAFE_INTEGER;
  //To store the lastposition of word1
  let lastPos = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == word1 || s[i] == word2) {
      //first occurrence of word1
      if (lastPos == -1) {
        lastPos = i;
      } else {
        //if word1 repeated again we store the last position of word1
        if (s[lastPos] == s[i]) {
          lastPos = i;
        } else {
          //find the difference of position of word1 and word2
          ans = Math.min(ans, i - lastPos - 1);
          lastPos = i;
        }
      }
    }
  }
  return ans;
}

// Driver code
let s = ["geeks", "for", "geeks", "contribute", "to", "the", "practice"];
let w1 = "geeks";
let w2 = "practice";

console.log(shortestDistance(s, w1, w2));

// This code is contributed by garg28harsh.

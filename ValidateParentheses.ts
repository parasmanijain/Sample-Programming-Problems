function isValidParenthesis(exp: string) {
  const stack = {};
  const regex = /[\{\}\(\)\[\]]/;
  const pairs = { "(": ")", "{": "}", "[": "]" };
  const entries = Object.entries(pairs);
  for (const char of exp) {
    if (regex.test(char)) {
      const charset = entries.find((el) => el.includes(char)) as [
        string,
        string
      ];
      if (char === charset[0]) {
        stack[charset[0]] = (stack[charset[0]] || 0) + 1;
      } else {
        stack[charset[0]] = (stack[charset[0]] || 0) - 1;
      }
    }
  }
  return Object.values(stack).every((el) => el === 0);
}

console.log(
  isValidParenthesis(
    "right.addEventListener('mouseenter', () => {container.classList.add('hover-right');});"
  )
);

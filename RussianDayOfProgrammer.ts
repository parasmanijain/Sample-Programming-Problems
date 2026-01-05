function addCalendarDays(year: number) {
  let d: Date;
  if (year === 1918) {
    d = new Date(year, 2, 1, 0, 0, 0, 0);
    d.setDate(d.getDate() + 209);
  } else if (year >= 1700 && year <= 1917 && year % 100 === 0) {
    d = new Date(year, 0, 1, 0, 0, 0, 0);
    d.setDate(d.getDate() + 254);
  } else {
    d = new Date(year, 0, 1, 0, 0, 0, 0);
    d.setDate(d.getDate() + 255);
  }
  return d;
}

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year: number) {
  const d = addCalendarDays(year);
  let result = "";
  result = d.getDate() < 10 ? "0" + d.getDate() : d.getDate().toString();
  result =
    result +
    "." +
    (d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1);
  result = result + "." + d.getFullYear();
  return result;
}

console.log(dayOfProgrammer(1900));
console.log(dayOfProgrammer(1916));
console.log(dayOfProgrammer(1917));
console.log(dayOfProgrammer(1918));
console.log(dayOfProgrammer(2000));
console.log(dayOfProgrammer(2016));

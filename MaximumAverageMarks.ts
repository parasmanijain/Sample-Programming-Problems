function findMaxAverage(employees: string[][]) {
  // Step 1: Create a map to store cumulative marks and count of entries for each employee
  let employeeData = {};

  // Step 2: Process each employee and update the sum of marks and count
  for (let i = 0; i < employees.length; i++) {
    const [name, marks] = employees[i];
    const numericMarks = parseInt(marks, 10); // Ensure marks are treated as integers

    if (!employeeData[name]) {
      // If employee doesn't exist in map, initialize with sum = marks, count = 1
      employeeData[name] = { sum: numericMarks, count: 1 };
    } else {
      // If employee already exists, update the sum and count
      employeeData[name].sum += numericMarks;
      employeeData[name].count += 1;
    }
  }

  // Step 3: Find the employee with the maximum average marks
  let maxAverage = -Infinity;
  for (let name in employeeData) {
    let { sum, count } = employeeData[name];
    let average = sum / count;
    if (average > maxAverage) {
      maxAverage = average;
    }
  }

  return maxAverage;
}

// Example Usage:
const employees = [
  ["Alia", "-678"],
  ["Bobby", "100"],
  ["Alex", "223"],
  ["Alex", "-23"],
  ["Bobby", "723"],
];

console.log(findMaxAverage(employees)); // Output: 315

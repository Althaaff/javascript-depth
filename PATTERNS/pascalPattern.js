function pascalTriangle(n) {
  let triangle = [];

  for (let i = 0; i < n; i++) {
    triangle[i] = []; // Create a new row
    triangle[i][0] = 1; // First element is always 1
    triangle[i][i] = 1; // Last element is always 1

    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j]; // Sum of two above elements
    }
  }

  // Printing Pascal's Triangle with proper spacing
  for (let i = 0; i < n; i++) {
    let spaces = " ".repeat((n - i) * 2); // Spaces for alignment
    let rows = triangle[i].join("   "); // Formatting the row
    console.log(spaces + rows);
  }
}

// Test with n = 5
pascalTriangle(4);

// output should look like this  :
[
  [1], // Row 0
  [1, 1], // Row 1
  [1, 2, 1], // Row 2
  [1, 3, 3, 1], // Row 3
];

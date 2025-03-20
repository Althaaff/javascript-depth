// Indexing
/*(0, 0)         (0, 4)
            (1, 1)  (1, 3)   
                (2, 2)
            (3, 1)  (3, 3)
          (4, 0)        (4, 4)
       */

// create one function xPattern(n)
// run the outer for loop from the index 0 to n
// create one variable called row = ""
// run the another inner loop. each time outer loop iteration innrer loop runs 0 to n
// check the condition outer loop index is equal to innrer loop j index or outerloop i + j === n-1
// if above condition is true then print the star (*) otherwise print the print the empty string " "
// finally console the row inside outerloop
// call the function*

function xShapePattern(n) {
  // outerloop
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      if (i === j || i + j === n - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

xShapePattern(5);

let ar = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
  /*
   * Write your code here.
   */
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    let indexOflastItem = ar.length - 1;
    sum += ar[i];
    console.log(sum);
    if (ar.indexOf(ar[i]) === indexOflastItem) {
      return sum;
    }
  }
}

simpleArraySum(ar);

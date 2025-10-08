/* Write a function from the below array of number that will return sum of duplicate values. let
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
a. The function will return 40 */
arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
arr2 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
function sumDuplicates(arr) {
  // Sorting
  const sortedArr = [...arr].sort((a, b) => a - b);
  
  let totalSum = 0;

  // Loop melalui array yang sudah diurutkan.
  for (let i = 0; i < sortedArr.length; i++) {
    let count = 1;

    // Loop kecil untuk menghitung kelompok angka yang sama.
    // Selama angka berikutnya sama dengan angka saat ini...
    while (i + 1 < sortedArr.length && sortedArr[i] === sortedArr[i + 1]) {
      count++; 
      i++;     
    }

    // Jika hitungan lebih dari 1, berarti itu adalah kelompok duplikat.
    if (count > 1) {
      totalSum += sortedArr[i] * count;
    }
  }

  return totalSum;
}

console.log(sumDuplicates(arr));

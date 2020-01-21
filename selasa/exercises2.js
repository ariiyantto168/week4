// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar).
//  FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

// Faktor Persekutuan Terbesar

function fpb(angka1, angka2) {
    // console.log(angka1, angka2)
  for (let i=angka1; i > 0; i--) {
    if (angka2 % i === 0 && angka1 % i ===0) {
      return i;
    }
    
  }
    
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
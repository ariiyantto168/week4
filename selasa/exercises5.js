// Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
//  Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya.
//  Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

// Logic Challenge - Ubah Huruf


function ubahHuruf(kata) {
    let dictionary = 'abcdefghijklmnopqrstuvwxyz';
    let dictionaryArr = (dictionary.split(''));
    let newWord = "";
    for (let i = 0; i < kata.length; i++) {
      for (let j = 0; j < dictionaryArr.length; j++) {
        if (kata[i] === dictionaryArr[j]) {
          if (dictionaryArr[j] === 'z') {
            newWord += 'a';
          }else{
            newWord += dictionaryArr[j+1]
          }
        }
        
      }
      
    }

    return newWord;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
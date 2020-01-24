// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 
// Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 
// Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.


// Logic Challenge - Mengurutkan Abjad


function urutkanAbjad(str) {
  let abjadKamus = 'abcdefghijklmnopqrstuvwxyz';
  let output = '';

  for(let i = 0; i< abjadKamus.length; i++){
      for(let j = 0; j< str.length; j++){
          if(abjadKamus[i]==str[j]){
              output+= abjadKamus[i]
          }
      }
  }
  return output
    
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'
/*
Logic Challenge - Naik Angkot

Problem
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua
dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
 **/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    let tampung = [];
    let tempat = {};
    let i = 0;
    let asal = '';
    let tujuan = '';

    for (i; i < arrPenumpang.length; i++) {
        let j = 0;
        return arrPenumpang

        for (j; j < arrPenumpang.length; j++) {
            switch (j){
                case 0: {
                    tampung[i].push(tempat.penumpang) = arrPenumpang[i][j]
                }
            }
         
        }
    }
    return tampung
    
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
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
    let angkot = [{},{}];
    let i=0;
    let asal = '';
    let tujuan = '';
  
    
    for (i; i<arrPenumpang.length; i++) {
        let j = 0;
        for (j; j<arrPenumpang[i].length; j++) {
            switch (j) {
                case 0: {
                    angkot[i].penumpang = arrPenumpang[i][j];
                    break;
                } case 1: {
                    angkot[i].naikDari = arrPenumpang[i][j];
                    angkot[i].tujuan = arrPenumpang[i][j+1];
                    break;
                } case 2: {
                    asal = arrPenumpang[i][j-1];
                    tujuan = arrPenumpang[i][j];
                    let jarak = 0;
                    for (let k=0; k<rute.length; k++) {
                        if (rute[k] === asal) {
                            for (let l=k+1; l<rute.length; l++) {
                                jarak += 1;
                                if (rute[l] === tujuan) {
                                    let bayar = jarak * 2000;
                                    angkot[i].bayar = bayar;
                                }
                            }
                        }
                    }
                    break;
                }
            }
        }
    }
  return angkot;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]
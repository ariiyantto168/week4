/**
 * Belanja Bulanan Ibu rumah tangga
 * 
 * Function belanjaBulanan menerima input berupa array yang merupakan kumpulan list daftar belanja kebutuhan yang harus di beli oleh ibu rumah tangga.
 * setiap daftar list memiliki nama jenis bahan yang harus di beli dan di sini nama dan bahan terdapat double atau lebih yang di beli. 
 * Function ini akan berfungsi menghindari dan menghapus nama barang yang double atau lebih  dan menggabungkan list daftar yang harus di beli 
 * 
 */

function belanjaBulanan(arr1, arr2) {
    // you can only write your code here!

}

console.log(belanjaBulanan(
	["ayam", "ikan", "sayur", "minyak goreng"],
    ["ikan", "tempe", "tahu"],

    ));
    // output : [ 'ayam', 'ikan', 'sayur', 'minyak goreng', 'tempe', 'tahu' ]

    
console.log(belanjaBulanan(
        ["bumbu dapur", "bawang merah", "cabai", "tomat"],
        ["tomat", "bawang putih", "jahe"]
        ));
        // output [ 'bumbu dapur','bawang merah','cabai','tomat','bawang putih','jahe' ]
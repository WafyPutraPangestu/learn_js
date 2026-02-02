//var  firstName; 
//var  middleName;
//var  lastName;
//var  fullName;
//var  umur;
//var  pekerjaan;
// lebih disarankan menggunakan 'let' daripada 'var' karena 'let' memiliki cakupan blok yang lebih baik dan menghindari beberapa masalah yang terkait dengan 'var' seperti hoisting dan redeklarasi variabel.
let firstName; 
let middleName;
let lastName;
let fullName;
let umur;
let pekerjaan;

firstName = "Wafy"
middleName = "Putra"
lastName = "Pangestu"
umur = 24
pekerjaan = "Programmer"
fullName = firstName + " " + middleName + " " + lastName;

// CARA SIMPLE ATAU MENGGABUANGKAN AGAR GA MEMAKAN BANYAK TEMPAT / VARIABLE AND VALUE

let namaDepan = "Wafy";
let namaTengah = "Putra";
let NamaTerakhir = "Pangestu";
let usia = 24;
let profesi = "Programmer";
let namaLengkap = firstName + " " + middleName + " " + lastName;

// lebih disarankan menggunakan 'let' daripada 'var' karena 'let' memiliki cakupan blok yang lebih baik dan menghindari beberapa masalah yang terkait dengan 'var' seperti hoisting dan redeklarasi variabel.
// var namaDepan = "Wafy";
// var namaTengah = "Putra";
// var NamaTerakhir = "Pangestu";
// var usia = 24;
// var profesi = "Programmer";
// var namaLengkap = firstName + " " + middleName + " " + lastName;


// CARA MENGAKSES VARIABLE
document.writeln("<h3>Data Diri Saya</h3>");
 document.writeln(firstName);
    document.writeln("<br>");
 document.writeln(middleName);
    document.writeln("<br>");
 document.writeln(lastName);
    document.writeln("<br>");
 document.writeln(umur);
    document.writeln("<br>");
 document.writeln(fullName);
    document.writeln("<br>");
    document.writeln("<hr>");

// CARA MENGAKSES VARIABLE YANG SIMPLE
 document.writeln(namaDepan);
    document.writeln("<br>");
 document.writeln(namaTengah);
    document.writeln("<br>");
    document.writeln(NamaTerakhir);
    document.writeln("<br>");
 document.writeln(usia);
    document.writeln("<br>");
    document.writeln(namaLengkap);
    document.writeln("<br>");
    document.writeln(profesi);
    document.writeln("<br>");
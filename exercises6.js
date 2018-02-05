1.) Melakukan Looping Menggunakan While

var loop1 =0;
var loop2 =21;
  console.log('LOOPING PERTAMA');
while(loop1 <= 20){ // terus jalan
  loop1 ++;
    if (loop1 % 2 ===0){
      console.log(loop1 +'- I love coding');
    }
}
  console.log('LOOPING KEDUA');
while(loop2 >= 0){
  loop2--;
    if(loop2 % 2===0){
      console.log(loop2 +'- I will become fullstack developer');
    }
}
------------------------------------------------------------------------

2.) Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');
  for(var angka = 1; angka <= 20; angka++){
      console.log( angka + ' - I love coding');
  }
  console.log('LOOPING KEDUA');
  for(var angka2 = 20; angka2 >= 1; angka2-- ){
    console.log( angka2 + ' - I will become fullstack developer');
  }

------------------------------------------------------------------------
3.)Angka Ganjil dan Genap
Soal pertama menentukan ganjil genap dengan counter 1

var awal =1;
var akhir =100;
  while(awal <= akhir){ // terus jalan
  if (awal %2===0 ){
      console.log(awal +' - genap');
  } else {
      console.log(awal +' - ganjil');
    }
    awal ++;
 }
 -----------------------------------------------------------
soal kedua menentukan kelipatan 3 dengan counter 2,5,9

var awal =2;
var akhir =20;
  while(awal <= akhir){ // terus jalan
  if (awal %3===0 ){
      console.log(awal +' - 3 kelipatan 3');
  } else {
      console.log('');
    }
    awal ++;
 }
-----------------------------
var awal2 =5;
var akhir2 =20;
  while(awal2 <= akhir2){ // terus jalan
  if (awal2 %6===0 ){
      console.log(awal2 +' - 6 kelipatan 6');
  } else {
      console.log('');
    }
    awal2 ++;
 }
----------------------------------
var awal3 =9;
var akhir3 =50;
  while(awal3 <= akhir3){ // terus jalan
  if (awal3 %10===0 ){
      console.log(awal3 +' - 10 kelipatan 10');

  } else {
      console.log('');
    }
    awal3 ++;
 }

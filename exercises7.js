1.) Menyusun Barisan Bintang

var rows =1;
var bintang =5;
while (rows <= bintang){
  console.log('*');
  rows++;
}


2.) Menyusun Barisan Bintang Dengan Nested Looping

var rows =1;
var bintang =5;

while (rows <= bintang){
  var rows2=1;
  var bintang2='';
    while (rows2 <= bintang){
       bintang2 +=  '*';
       rows2++;
    }

  console.log(bintang2);
  rows++;
}

3.) Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows =5;
var bintang ='';
var baris=0;
var barisDalam =0;
while (baris <= rows ){

  while (barisDalam < baris){
    bintang += '*';
    barisDalam++;
  }
  console.log(bintang);
  baris++;
}

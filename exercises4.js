var tanggal = 1;
var bulan = 1;
var tahun = 1945 ;

switch(bulan){
  case 1 : {bulan='Januari';break;}
  case 2 : {bulan='februari'; break;}
  case 3 : {bulan='maret'; break;}
  case 4 : {bulan='april'; break;}
  case 5 : {bulan='mei'; break;}
  case 6 : {bulan='juni'; break;}
  case 7 : {bulan='juli'; break;}
  case 8 : {bulan='agustus'; break;}
  case 9 : {bulan='september'; break;}
  case 10: {bulan='oktober'; break;}
  case 11: {bulan='november'; break;}
  default : {bulan='desember'; break;}
}

console.log(tanggal+' '+ bulan + ' ' + tahun);


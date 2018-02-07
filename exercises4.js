var hari = '17'; //1-31
var bulan = '2';//januari - desember
var tahun = '2018'; //1900-2200
for (hari;hari > 0 && hari <= 31; hari++ ){
    console.log(hari);
  break;
}


 switch(bulan){
   case '1':   { console.log('januari'); break; }
   case '2':   { console.log('februari'); break; }
   case '3':   { console.log('maret'); break; }
   case '4':   { console.log('april'); break; }
   case '5':   { console.log('mei'); break; }
   case '6':   { console.log('juni'); break; }
   case '7':   { console.log('juli'); break; }
   case '8':   { console.log('agustus'); break; }
   case '9':   { console.log('september'); break; }
   case '10':   { console.log('oktober'); break; }
   case '11':   { console.log('november'); break; }
   case '12':   { console.log('desember'); break; }

    default:  { console.log('bukan nama bulan'); }
}
for (tahun; tahun > 1900 && tahun <= 2200; tahun++ ){
  console.log(tahun);
  break;
}

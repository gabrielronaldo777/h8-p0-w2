var hari = 'isi hari'; //1-31
var bulan = 'isi bulan';//januari - desember
var tahun = 'isi tahun'; //1900-2200

console.log(hari);

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
console.log(tahun);

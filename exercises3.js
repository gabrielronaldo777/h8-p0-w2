var nama = 'isi namamu disini....';
var peran = 'isi peranmu disini...';

if (nama === '') {
      console.log('Nama harus di isi!');
} else if (peran === '') {

      console.log('Halo!' +nama+',Pilih peranmu untuk memulai game!');

} else if (peran === 'ksatria') {

      console.log('Selamat datang di Dunia Proxytia,'+nama+ '' );
      console.log('Halo' +peran+ ''+nama+ ',kamu dapat menyerang dengan senjatamu!');
} else if (peran === 'tabib') {

      console.log('Selamat datang di Dunia Proxytia,'+nama+'');
      console.log('Halo tabib' +nama+',kamu akan membantu temanmu yang terluka!');

} else if (peran === 'penyihir') {

      console.log('Selamat datang di Dunia Proxytia,' +nama+'');
      console.log('Halo Penyihir' +nama+',ciptakan keajaiban yang membantu kemenanganmu!');
}

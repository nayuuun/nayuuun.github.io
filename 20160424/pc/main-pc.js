window.onload = function(){

  var image = document.getElementById('image');

  // app_id�͎����̂��̂ɏ��������Ă�������
  var milkcocoa = new MilkCocoa('teaine87136.mlkcca.com');
  var ds = milkcocoa.dataStore('gravity');

  ds.on('send', changeViewFromSentMode);

  function changeViewFromSentMode(sent){
    if(sent.value.mode === 'portrait'){
      image.className = '';
    }
    if(sent.value.mode === 'landscape'){
      image.className = 'is-landscape';
    }
  }
};

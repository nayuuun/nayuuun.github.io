window.onload = function(){

  var currentMode = 'portrait';
  var output = document.getElementById('output');

  // app_id�͎����̂��̂ɏ��������Ă�������
  var milkcocoa = new MilkCocoa('teaine87136.mlkcca.com');
  var ds = milkcocoa.dataStore('gravity');

  window.addEventListener('devicemotion', function(e){
    gravity = e.accelerationIncludingGravity;

    output.innerHTML
    = 'x����: '+gravity.x
    + '<br>y����: '+gravity.y;

    sendModeFromGravityValue(gravity);

  },true);


  function sendModeFromGravityValue(g){

    // ��Βl���擾
    var x = Math.sqrt(g.x * g.x);
    var y = Math.sqrt(g.y * g.y);

    // portrait -> landscape
    if(currentMode === 'portrait' && x > 8.5 && y < 1.5){
      currentMode = 'landscape';
      ds.send({mode: currentMode});
    }

    // landscape -> portrait
    if(currentMode === 'landscape' && x < 1.5 && y > 8.5){
      currentMode = 'portrait';
      ds.send({mode: currentMode});
    }
  }
};

//������appID�����
var milkcocoa = new MilkCocoa('applein5qdclb.mlkcca.com');
var ds = milkcocoa.dataStore('countdata');

var count = 0;
var countbox = document.getElementById('count');
var nameform = document.getElementById('nameform');


var shakecheck = function(name) {
  $(this).gShake(function() {
    count++;
    countbox.innerHTML = 'count: '+ count;
    data ={};
    data.name = name;
    data.count = count;
    ds.send({data: data});
  });
}

function namefunc(){
    name = document.nameform.nameval.value;
    nameform.innerHTML = "your name " + name;
    shakecheck(name);
} 



//���s��submit�����Ȃ��悤�ɂ���
function submitStop(e){
    if (!e) var e = window.event;

    if(e.keyCode == 13)
        return false;
}
function next_page() {
    var inputA = document.querySelector('input[list="cidade"]');
    var city = inputA.value;
    var inputB = document.querySelector('input[list="condominio"]');
    var condominio = inputB.value;

    if (city === '' || condominio === ''){
        alert('Selecione Todos os Campos');              
    } else {
        window.location.href ="/boxCash2.html";
    }  
}


function next_page2() {

var radios = document.getElementsByName('radio');

for (var i = 0; i < radios.length; i++) {
  if (radios[i].checked) {
     console.log('O radiobutton ' + (i+1) + ' foi selecionado.');
     var vaga = i+1;
     console.log(vaga + ' é a vaga TAL');
     window.location.href ="/boxCash3.html";   
  }
}
}





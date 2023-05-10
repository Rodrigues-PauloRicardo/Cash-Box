function next_page() {
    var inputA = document.querySelector('input[list="cidade"]');
    var city = inputA.value;
    var inputB = document.querySelector('input[list="condominio"]');
    var condominio = inputB.value;
    localStorage.setItem('cidade', city);
    localStorage.setItem('condominio', condominio);

    if (city === '' || condominio === ''){
        alert('Selecione Todos os Campos');              
    } else {
        window.location.href ="/boxCash2.html";
    }  
}


function copyPixLink() {
  var pixLink = 'boxcash@gmail.com';
  var tempElement = document.createElement("textarea");
  tempElement.value = pixLink;
  document.body.appendChild(tempElement);
  tempElement.select();
 // document.execCommand("copy");
  document.body.removeChild(tempElement);
  alert('link copiado com sucesso!')
  // ...
}




function next_page2() {
var radios = document.getElementsByName('radio');
localStorage.setItem('vaga', vaga);
for (var i = 0; i < radios.length; i++) {
  if (radios[i].checked) {
     console.log('O radiobutton ' + (i+1) + ' foi selecionado.');
     var vaga = i+1;
     console.log(vaga + ' é a vaga TAL');
     window.location.href ="/boxCash3.html";   
  }
}
}

function confirme(){    
    var fone = document.getElementById('fone').value;     
    var nome = localStorage.getItem(nome);
    var cidade = localStorage.getItem('cidade');
    var condominio = localStorage.getItem('condominio');  


    if (nome === '' || fone === '') {
      alert('Preencha todos os Campos')
    } else {
        window.location.href = "/confirm.html?cidade=" + cidade + "&condominio=" + condominio + "&nome=" + nome + "&fone=" + fone;    
    }
}
  var params = new URLSearchParams(window.location.search);
  var nome = params.get('nome');
  var fone = params.get('fone');
  var cidade = params.get('cidade');
  var condominio = params.get('condominio');




  var res = document.getElementById('respCity');
  res.innerHTML = 'Nome ' + nome;

  var res = document.getElementById('respCity');
  res.innerHTML = 'Em ' + cidade;
  var res = document.getElementById('respCond');
  res.innerHTML = condominio;
  







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

function next_page2() {
  var radios = document.getElementsByName('radio');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {     
       var vaga = radios[i].value;
       localStorage.setItem('vaga', vaga);
      // console.log(vaga);
       window.location.href ="/boxCash3.html";   
    }
  }  
}

function confirme(){ 
  
  
    var fone = document.getElementById('fone').value;     
    var nome = document.getElementById('nome').value;
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
  var vaga = localStorage.getItem('vaga');
  
  var res = document.getElementById('respNome');
  res.innerHTML = nome + '  ---  '+ fone;
  var res = document.getElementById('respCity');
  res.innerHTML = 'Em ' + cidade;
  var res = document.getElementById('respCond');
  res.innerHTML = condominio;
  var res = document.getElementById('respVaga');
  res.innerHTML = 'VAGA '+ vaga;

  function copyPixLink() {
    var pixLink = 'boxcash@gmail.com';
    var tempElement = document.createElement("textarea");
    tempElement.value = pixLink;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
    alert('Link copiado com sucesso!')
    // ...
  }



// Cria um objeto Date com a data e hora atuais
var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1;
// Obtém a hora local
var hora = dataAtual.getHours();
// Obtém o minuto local
var minuto = dataAtual.getMinutes();
// Obtém o segundo local
var segundo = dataAtual.getSeconds();
// Exibe a hora local no formato "HH:MM:SS"

var total = hora + 3;
if (total>24){
  total = total -24; 
  mes = mes + 1;
 
}



console.log('Liberar á vaga até as '  + total + ' horas');
console.log('hoje é dia ' + dia);
console.log('do mês de ' + mes);
console.log(hora + ':' + minuto + ':' + segundo);

document.getElementById("respFone").innerHTML = `ATENÇÃO LIBERAR VAGA ATÉ <br> ${total} HORAS do dia ${dia}/${mes}`;
   


function historic() {
  var nome = localStorage.getItem('nome');
  var fone = localStorage.getItem('fone');
  var cidade = localStorage.getItem('cidade');
  var condominio = localStorage.getItem('condominio');
  var vaga = localStorage.getItem('vaga');

  var resNome = document.getElementById('respNome');
  resNome.textContent = nome + '  ---  ' + fone;
  var resCity = document.getElementById('respCity');
  resCity.textContent = 'Em ' + cidade;
  var resCond = document.getElementById('respCond');
  resCond.textContent = condominio;
  var resVaga = document.getElementById('respVaga');
  resVaga.textContent = 'VAGA ' + vaga;

  window.location.href = "./confirm.html";
}


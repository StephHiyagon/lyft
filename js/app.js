var panel=document.getElementsByTagName('header')[0];
// var img1=document.getElementById('white');
var img2=document.getElementById('purple');
var anchor=document.getElementsByTagName('a');
var log=document.getElementsByClassName('log');
var sign=document.getElementsByClassName('sign');
var finalScroll="0";

function moveScroll(event){
  var scroll=window.pageYOffset || document.body.scrollTop;
  if(scroll>3){
    console.log(panel);
    panel.classList.add("up");
    img2.style.display="block";
    for(var i=0;i<3;i++){
      anchor[i].classList.add("black");
    }
    log[0].classList.add("login");
    sign[0].style.display="block";
    console.log(scroll);
  }

  if(scroll<=3){
    panel.classList.remove("up");
    img2.style.display="none";
    for(var i=0;i<3;i++){
      anchor[i].classList.remove("black");
    }
    log[0].classList.remove("login");
    sign[0].style.display="none";
  }

}

window.addEventListener('scroll',moveScroll);

var input=document.getElementsByTagName('input');

function desplega(event){
  for(var i=1;i<4;i++){
    input[i].style.display="block";
  }
}

input[0].onclick=desplega;

function numero(e){
  var key=e.keyCode;
  console.log(key);
  var teclado=String.fromCharCode(key).toLowerCase();
  console.log(teclado);
  var numeros="0123456789";
  var especiales="8-37-38-46-164";
  var teclado_especial=false;
  for (var i in especiales){
    if(key==especiales[i]){
      teclado_especial=true;
      break;
    }
  }
  if(numeros.indexOf(teclado)==-1 && !teclado_especial){
    return false;
  }
}

input[0].onkeypress=numero;

function letras(e){
  var key=e.keyCode;
  console.log(key);
  var teclado=String.fromCharCode(key).toLowerCase();
  console.log(teclado);
  var letras=" abcdefghijklmnopqrstuvwxyz";
  var especiales="8-37-38-46-164";
  var teclado_especial=false;
  for (var i in especiales){
    if(key==especiales[i]){
      teclado_especial=true;
      break;
    }
  }
  if(letras.indexOf(teclado)==-1 && !teclado_especial){
    return false;
  }
}

function noPegar(){
  return false;
}

input[1].onkeypress=letras;
input[3].onkeypress=letras;

var error=document.getElementsByClassName('error');

function valida(event){
  if(this.value==""){
    this.nextElementSibling.style.display="block";
    this.classList.add("red");
  }else{
    this.nextElementSibling.style.display="none";
    this.classList.remove("red");
  }

  if(this.getAttribute("type")=="text"){
      var txt="";
      var separa=this.value.split(" ");
    	separa.forEach(function(e){
        return txt = txt + e.charAt(0).toUpperCase() + e.slice(1) + " ";});
      var imp=txt.trim();
    	return this.value=imp;
    }
}


for(var i=0; i<2;i++){
  input[i].onblur=valida;
}

input[3].onblur=valida;

function correo(event){
  var correo=input[2].value;
  console.log(correo);
  if(!(/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(correo)) || correo==""){
    this.nextElementSibling.style.display="block";
    this.classList.add("red");
  }else{
    this.nextElementSibling.style.display="none";
    this.classList.remove("red");
  }
}

input[2].onblur=correo;

var become=document.getElementById("become");

function envia(event){
  if(input[0].value!="" && input[1].value!="" && input[2].value!="" && input[3].value!=""){
    input[0].value="";
    for(var i=1;i<4;i++){
      input[i].style.display="none";
    }
  }
}
become.onclick=envia;

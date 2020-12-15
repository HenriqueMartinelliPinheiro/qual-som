//parte de baixo
var audioElement01 = new Audio('sons/gato.mp3');
$("section.som01 footer p span.som").on("click", function(){
audioElement01.play();
});

var audioElement02 = new Audio('sons/macaco.mp3');
$("section.som02 footer p span.som").on("click", function(){
  audioElement02.play();
})

$("section.som01 span.ajuda").on("click", function(){
 $("section.som01 .certo").css("borderColor", '#18a81f');
})

$("section.som02 span.ajuda").on("click", function(){
  $("section.som02 .certo").css("borderColor", '#18a81f');
 })

 $(".home").on("click", function(){
 $("section.som01").hide();
 $("section.som02").hide();
 $("section.inicio").show();
 $("#certo").css("borderColor", '#e3d7cb')
 });


//inicio
$("section.inicio button").on("click", function(){
  $("section.inicio").hide();
  $("section.som01").show();
  audioElement01.play();
  $("span.segundos").text(0);
  $("span.minutos").text(0);
  $("span.segundos02").text(0);
  $("span.minutos02").text(0);
});

//tempo
setInterval(function(){
var minutos = parseInt($("p span.minutos").text());
var segundos = parseInt($("p span.segundos").text());

segundos += 1;
if(segundos<10){
  segundos = "0" + segundos; 
}
if(minutos<10){
  minutos = "0" + minutos ;
}
$("span.segundos").text(segundos);
$("span.segundos02").text(segundos);

if(segundos == 60) {
  $("span.segundos02").text(0);
  $("span.minutos02").text(minutos + 1);
  $("span.segundos02").text(0);
  $("span.minutos02").text(minutos + 1);
}
},1000);

//pergunta 01
$("section.som01 div ul li.certo").on("click", function(){
  $("section.som01").hide();
  $("section.som02").show();
  audioElement02.play();
});

$("section.som01 div ul li.errado").on("click", function(){
  $("section.som01").hide();
  $("section.fim02").show();
});

//pergunta 02
$("section.som02 div ul li.certo").on("click", function(){
  $("section.som02").hide();
  segundos = $("section.som01  p span.segundos").text();
  minutos = $("section.som01 p span.minutos").text();
  var tempo = minutos + ":" + segundos;
  $("section.fim01").show();
  $("section.fim01 h1.tempo").text(tempo);
 
});

$("section.som02 div ul li.errado").on("click", function(){
  $("section.som02").hide();
  $("section.fim02").show();
});



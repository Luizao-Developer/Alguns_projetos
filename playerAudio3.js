var musicas = [
{
    audio: "Audios/cloud-9-ncs-release.mp3",
    autor: "Itro & Tobu",
    imagem: "Imagens/fotoMusica1.jpg",
    titular: "cloud-9-ncs-release"
},
{
    audio: "Audios/title.mp3",
    autor: "ncs-release",
    imagem:"Imagens/fotoMusica3.jpg",
    titular: "title"
},
{
    audio: "Audios/feel-good-ncs-release.mp3",
    autor: "Syn Cole",
    imagem: "Imagens/imagem1.jpg",
    titular: "feel-good-ncs-release"
},
{
    audio: "Audios/Rise of Nations soundtrack - WilliamWallace.mp3",
    autor:  "Duffmaister",
    imagem: "Imagens/fotoMusica4.jpg",
    titular: "Willian Wallace"
}
];
var musica = new Audio();
var indica = document.getElementById('indic');
var imagemMusica = document.getElementById('fotoMusica');
var imagemFundo = document.getElementById('imagemFundo');
var posic = 0;
var titulo = document.getElementById('Titulo');
var autores = document.getElementById("autor")
var tocar = document.getElementById('tocar');

$("#tocar").click(function () {
    if(musica.paused){
    musica.src = musicas[posic].audio;
    imagemMusica.src=musicas[posic].imagem;
    imagemFundo.src=musicas[posic].imagem;
    musica.play();
    tocar.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAI0lEQVRIiWNgGAWjYFiA/0gYn9ioBaMWjFowmC0YBaNggAEAfoM7xeGFS3YAAAAASUVORK5CYII="/>';
    }else if(musica.played){
        musica.pause();
        tocar.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAYElEQVRIie3UMQ2AQBBE0VciAylIQQgJOEECEpByMiihupLQ3ITmfjL1T3Z2l04nzYExKbhxYcGQEtScmJOCmh1TUnCjYNWgnzdBs7H9JijYhEYUKzm2ptFDi7+KTuebB1NFO550b58LAAAAAElFTkSuQmCC"/>'
    }
    titulo.innerHTML = `${musicas[posic].titular}`;
    autores.innerHTML = `${musicas[posic].autor}`
})

$("#anterior").click(function(){
    posic++;
    if(posic <  0){
        posic = 0;
    }else{
        $(tocar);
    }
})
$("#proximo").click(function(){
    posic++;
    if(posic > 4){
        posic = 0;
    }else{
        $(tocar);
    }
})

musica.addEventListener('timeupdate',function () {
    var durando = musica.currentTime / musica.duration;
    indica.style.transform = 'translateX(' + durando * 400 + 'px)';
})
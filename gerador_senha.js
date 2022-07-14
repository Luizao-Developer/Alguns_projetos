var mostre_senha = document.getElementById("senha");
var gerador = document.getElementById("gerar_senha");
var senha = "abcdefghijklmnopqrstuvABCDEFGHIJKLMNOPQRSTUVWXYZ123456789/=!@#$%&*"
var mostre = ""
var tamanho_senha = 8
function gerando(){
    for (let index = 0; index < tamanho_senha; index++) {
        
        var numero_aleatorio = Math.floor(Math.random()* senha.length)
        mostre += senha.substring(numero_aleatorio,numero_aleatorio + 1);
      
    }
    mostre_senha.innerHTML = mostre;
   
}
function gerando_senha(){
   
}


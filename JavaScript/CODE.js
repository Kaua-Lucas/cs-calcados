// para barra de pesquisa, funcionar a animação / ira ficar desativado ate ser adicionado um banco de dados 
// let box = document.querySelector(".buscar_box");
// let lupa = document.querySelector(".lupa_buscar");
// let btnFechar = document.querySelector(".btn_buscar");

// lupa.addEventListener('click',()=>{
//     box.classList.add("ativar")
// })

// btnFechar.addEventListener('click',()=>{
//     box.classList.remove("ativar")
    
// })
//FIM

var dt = new Date();

console.log(dt.getHours())
var link = document.querySelectorAll('.button_zap')[0];
 
if(dt.getHours() >= 0 && dt.getHours() < 12){
    link.href = "https://wa.me/5581995418334?text=Bom%20dia!!%20Tenho%20uma%20duvida.%20";
    var link = document.querySelectorAll('.button_zap')[1];
    link.href = "https://wa.me/5581995418334?text=Bom%20dia!!%20Tenho%20uma%20duvida.%20";
    
    
}else if(dt.getHours() >= 12 && dt.getHours() < 17 ){
    link.href = "https://wa.me/5581995418334?text=Boa%20tarde!!%20Tenho%20uma%20duvida.%20";
    var link = document.querySelectorAll('.button_zap')[1];
    link.href = "https://wa.me/5581995418334?text=Boa%20tarde!!%20Tenho%20uma%20duvida.%20";
}else{
    link.href = "https://wa.me/5581995418334?text=Boa%20noite!!%20Tenho%20uma%20duvida.%20";
    var link = document.querySelectorAll('.button_zap')[1];
    link.href = "https://wa.me/5581995418334?text=Boa%20noite!!%20Tenho%20uma%20duvida.%20";
}
//mostrar aba de redes sociais abertas

let aba = document.querySelectorAll(".cabecalho_button")[1];
let caixa = document.querySelector(".aba");
let fechar = document.querySelector(".aba_button_exit_click")
aba.addEventListener('click', ()=>{
    caixa.classList.add("aba_ativa")
    console.log("ola")
})
fechar.addEventListener('click', ()=>{
    caixa.classList.remove("aba_ativa")
    console.log("ola")
})


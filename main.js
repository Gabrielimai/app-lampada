const imagem = document.querySelector('#img');

function liga() {
  imagem.src = './img/lampada-ligada.png';
}

function desliga() {
  imagem.src = './img/lampada-incandescente-100w-1_1.jpg';
  imagem.width= 250
}

imagem.addEventListener('mouseover', function(event){
     imagem.src = './img/lampada-ligada.png';
    imagem.width= 180
})

imagem.addEventListener('mouseout', function(event){
    imagem.src = './img/lampada-incandescente-100w-1_1.jpg'; 
    imagem.width= 250
});

imagem.addEventListener('dblclick', function(quebraLampada){
    imagem.src='./img/lampada-quebrada.jpg'
     imagem.width= 150
})

let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde 
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a apaga as cores sorteadas
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('select');
        song();
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('select');
    }, number);
}

//compara se a cor selecionada é a correta
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação ${score}\n Você acertou! Iniciando próximo level`);
        score++;
        nextLevel();
    }
}

//fim de jogo
let gameOver = () => {
    alert(`Pontuação: ${score}\n Você perdeu o jogo\n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    playGame();
}

//avança para o próximo level
let nextLevel = () => {
    shuffleOrder();
}

//captura clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('select');
    song();
    
    setTimeout(() => {
       createColorElement(color).classList.remove('select');
       checkOrder();
    }, 250);
}


//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//toca um som
let song = () => {
    var audio = new Audio('clickb2.mp3');
    audio.play();
}

//inicia o jogo
let playGame = () => {
    alert(`Bem vindo ao Genius! Iniciando novo jogo`);
    score = 0;
    nextLevel();
}

//eventos de clique
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();
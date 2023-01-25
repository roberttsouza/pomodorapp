const toggleSidebar = () => document.body.classList.toggle("open");

let work = document.getElementById("work").value;
let breakTime = document.getElementById("break").value;
let rounds = document.getElementById("rounds").value;
let som = document.querySelector("#som");
let currentRound = 1;
const sessionNow = document.querySelector(".now-session").textContent;
const nextSession = document.querySelector(".rem-sessions").textContent;

const regex = /^([0-9]){1,3}$/g;

const foundWork = (work,breakTime,rounds).match(regex);

if (work && breakTime && rounds == foundWork){
  console.log("Tudo certo")
  
}else{
  console.log("Algo deu errodo")
}




// declarando as var do time
let time = document.querySelector('#work').value * 60;
let intervalId;

//atrubindo uma regra para que se o minuto ou segundo for menor que 10, atribuir um zero na frente para sempre ficar com dois numeros
function twoDigits(digits){
  if(digits<10){
    return("0"+digits)
    }else{
      return(digits)
    }
  }

//Ao precionar o botão de play, o time começa a contar
start = () =>{
  intervalId = setInterval(() => {
    time--;
    updateTimer();
    if (time === 0){
      if (currentRound === rounds) {
        // tudo finalizado, não faz nada
    } else {
        if (currentRound % 2 !== 0) {
            // inicia o tempo de descanso
            time = breakTime * 60;
            currentRound++;
        } else {
            // inicia o tempo de trabalho
            time = work * 60;
            currentRound++;
        }
    }
      clearInterval(intervalId);
      som.play()
    }
  }, 1000);
}

//se o botão de reset for precionado, ele ira voltar para o valor do input work atual
reset = () => {
  clearInterval(intervalId)
  intervalId = null;
  min= document.querySelector("#work").value
  sec=0
  document.querySelector('.watch').innerHTML = `${twoDigits(min)}:${twoDigits(sec)}`
}

//atribuindo um evendo para que quando o valor input por alterado, ele muda automaticamente
const inputWork = document.querySelector('#work');
inputWork.addEventListener("input", function(){
  time = parseInt(this.value * 60); //para converter o valor do input para inteiro e atribuindo esse valor para a variável global e para o time começar a contar apartir do valor informado no input 
  min= document.querySelector("#work").value
  sec=0
  document.querySelector('.watch').innerHTML = `${twoDigits(min)}:${twoDigits(sec)}`
})


//função responsável por atualizar o time em segundos e converter para numeros inteiros
function updateTimer(){
  const min = Math.floor(time / 60)
  const sec = time % 60;
  document.querySelector('.watch').innerHTML = `${twoDigits(min)}:${twoDigits(sec)}`
}




//função para pausar o sem de alarme
const pauseSom = document.querySelector("#pause")
pauseSom.addEventListener('click', function(){
  som.pause();
})
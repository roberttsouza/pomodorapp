const toggleSidebar = () => document.body.classList.toggle("open");

const work = document.getElementById("work").value;
const breakTime = document.getElementById("break").value;
const rounds = document.getElementById("rounds").value;

const regex = /^([0-9]){1,3}$/g;

const foundWork = (work,breakTime,rounds).match(regex);

if (work && breakTime && rounds == foundWork){
  console.log("Tudo certo")
}else{
  console.log("Algo deu errodo")
}


console.log(work, breakTime, rounds)

setTimeout(function reload(){
location.reload(); 
},1000) 

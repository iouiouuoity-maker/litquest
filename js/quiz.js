const questions=[

{q:"Әдеби символ деген не?",a:["Астарлы белгі","Жанр","Кейіпкер"],c:0},
{q:"Сантьяго кім?",a:["Балықшы","Ақын","Жазушы"],c:0},
{q:"Теңіз символы нені білдіреді?",a:["Өмір","Тау","Көл"],c:0},
{q:"Шыңырау нені білдіреді?",a:["Тағдыр","Жол","Дос"],c:0},
{q:"Әдеби талдауда символ не үшін керек?",a:["Мағынаны ашу","Кейіпкер санын азайту","Жанрды өзгерту"],c:0}

]

let current
let score=0

function load(){

current=Math.floor(Math.random()*questions.length)

document.getElementById("question").innerText=questions[current].q

let html=""

questions[current].a.forEach((x,i)=>{
html+=`<button onclick="check(${i})">${x}</button>`
})

document.getElementById("answers").innerHTML=html

}

function check(i){

if(i===questions[current].c){
alert("Дұрыс")
score++
}else{
alert("Қате")
}

}

function next(){

load()
document.getElementById("score").innerText="Ұпай: "+score

}

load()

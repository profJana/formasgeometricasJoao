var x=0;
var y=0;
var circolo="";
var quadrdo="";
var retangulo="";
//API de reconhecimento de fala
var SpeechRecognition = window.webkitSpeechRecognition;

//criando um novo reconhecimento de fala e armzenando na variável
var recognition = new SpeechRecognition();

function iniciar(){
    document.getElementById("status").innerHTML="o sistema esta ovindo, diga: circulo,quadrado ou retangulo"
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var conteudo = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "a fala foi reconhecida como "+conteudo


    if(conteudo=="círculo"){
        x = Math.floor(Math.random()*900)
        y = Math.floor(Math.random()*600)
        circolo = "desenhar"
    } 
    if(conteudo=="quadrado"){
        x = Math.floor(Math.random()*900)
        y = Math.floor(Math.random()*600)
        quadrdo = "desenhar"
    } 
    if(conteudo=="retângulo"){
        x = Math.floor(Math.random()*900)
        y = Math.floor(Math.random()*600)
        retangulo = "desenhar"
    } 
}
function setup(){
    canvas = createCanvas(900,600)
}
function draw(){
    if(circolo == "desenhar"){
        raio =Math.floor(Math.random()*100)
        red = Math.random()*255
        green = Math.random()*255
        blue = Math.random()*255
        fill(red,green,blue)
        circle(x,y,raio)
        circolo = ""
    }
    if(quadrdo == "desenhar"){
        red = Math.random()*255
        green = Math.random()*255
        blue = Math.random()*255
        fill(red,green,blue)
        rect(x,y,100,100)
        quadrdo = ""
    }
    if(retangulo == "desenhar"){
        red = Math.random()*255
        green = Math.random()*255
        blue = Math.random()*255
        fill(red,green,blue)
        rect(x,y,100,200)
        retangulo = ""
}
}
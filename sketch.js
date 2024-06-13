// variaveis da bolinha
let xcircle = 300;
let ycircle = 200;
let diametro = 25
let raio = diametro /2;

// velocidade da bolilha
let speedXcircle = 6;
let speedYcircle = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
    background(0);
    mostracircle();
    movimentacircle();
    verificaColisaoBorda();
    mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
}

function mostracircle() {
    circle(xcircle, ycircle, diametro)
}

function movimentacircle() {
    xcircle += speedXcircle;
    ycircle += speedYcircle;
}

function verificaColisaoBorda() {
  if (xcircle + raio > width || xcircle - raio < 0) {
        speedXcircle *= -1;
    }
  if (ycircle + raio > height || ycircle - raio < 0) {
        speedYcircle *= -1;
    }

}
    
function mostraRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
    if (xcircle - raio < xRaquete + raqueteComprimento  && ycircle - raio < yRaquete + raqueteAltura && ycircle + raio > yRaquete) {
        speedXcircle *= -1;
    }
}


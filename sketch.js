


var trex, trex_running, edges;
var groundImage, ground;





// função preload serve para carregar a img

function preload(){


trex_running = loadAnimation ("trex1.png","trex2.png","trex3.png");
groundImage = loadImage("ground1.png")


}



function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  // addAnimaion ("TrexCorrer", trex_running )
  trex.addAnimation("running", trex_running); // 

  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
trex.scale = 0.5;
trex.x = 50; 

  //CRIE uma SPRITE GROUND SOLO 

}


function draw(){
  //definir a cor do plano de fundo 
  background("red");
  
  //registrando a posição y do trex
  console.log(trex.y)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = - 10  ;
  }
  
  //gravidade sendo adicionada 
 trex.velocityY = trex.velocityY + 0.5;
  
 //impedir que o trex caia
  trex.collide(edges[3])
  drawSprites();
}
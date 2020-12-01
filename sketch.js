
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var count=0;
var particle;
var turn=0;
var gameState="play";

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

        ground=new Ground(470,795,1200,40);
        
    for (var k = 0; k <=width; k = k + 80) { 
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); 
     }

   for (var j = 75; j <=width; j=j+50) 
   { plinkos.push(new Plinko(j,75)); 
   }

   for (var j = 50; j <=width-10; j=j+50) 
   { plinkos.push(new Plinko(j,175)); 
   }


   for (var j = 75; j <=width; j=j+50) 
   { plinkos.push(new Plinko(j,275)); 
   }

   for (var j = 50; j <=width-10; j=j+50) 
   { plinkos.push(new Plinko(j,375)); 
   }


  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);




  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)

   textSize(30)
   //300
  text("500",width-620,520)
  text("500",width-550,520)
  text("500",width-700,520)
  text("500",width-790,520)
  //100
  text("100",width-380,520)
  text("100",width-470,520)
  text("100",width-300,520)
  
  //200
  text("200",width-230,520)
  text("200",width-150,520)
  text("200",width-60,520)



  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
    
  }


  if(particle!=null)
  {
   particle.display();
      
  if (particle.body.position.y>760)
   {
  if (particle.body.position.x < 300) 
{
score=score+500;      
  particle=null;
  if ( count>= 5) gameState ="end";}


 else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
 {
  score = score + 100;
   particle=null;
 if ( count>= 5) gameState ="end";
 }

 else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
{
 score = score + 200;
particle=null;
if ( count>= 5)  gameState ="end";

 }      
}
}







  for (var i = 0; i < plinkos.length; i++) 
  { plinkos[i].display(); 
  }

  for (var j = 0; j < particles.length; j++)
   { particles[j].display(); } 
   
   for (var k = 0; k < divisions.length; k++)
    { divisions[k].display(); }

    if(frameCount%60===0)
    { particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
    }
  
  


 mousePressed();
  ground.display();
  
  drawSprites();
 
}


function mousePressed(){
  if(gameState!=="end"){
  count++;
   particle=new Particles(mouseX,10,10,10)
  }
}




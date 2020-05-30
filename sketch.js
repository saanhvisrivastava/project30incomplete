const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;


function setup(){
    var canvas=createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;

  
    ground=new Ground(380,350,190,10);
  
    polygon=new Polygon(200,200);
    box=new Box(440,200,20,20);
    box2=new Box(460,200,20,20);
    box3=new Box(420,200,20,20);
    box4=new Box(400,200,20,20);
    box5=new Box(380,200,20,20);
    box6=new Box(360,200,20,20);
    box7=new Box(340,200,20,20);
    box8=new Box(320,200,20,20);
    box9=new Box(300,200,20,20);
    box10=new Box(300,150,20,20);
    box11=new Box(320,150,20,20);
    box12=new Box(340,150,20,20);
    box13=new Box(360,150,20,20);
    box14=new Box(380,150,20,20);
    box15=new Box(420,150,20,20);
    box16=new Box(440,200,20,20);
    box17=new Box(460,200,20,20);
    box18=new Box(400,200,20,20);
    box19=new Box(300,100,20,20);
    box20=new Box(320,100,20,20);
    box21=new Box(340,100,20,20);
    box22=new Box(360,100,20,20);
    box23=new Box(380,100,20,20);
    box24=new Box(420,100,20,20);
    box25=new Box(440,100,20,20);
    box26=new Box(460,100,20,20);
    box27=new Box(400,100,20,20);

    box28=new Box(300,80,20,20);
    box29=new Box(320,80,20,20);
    box30=new Box(340,80,20,20);
    box31=new Box(360,80,20,20);
box32=new Box(380,80,20,20);
    box33=new Box(420,80,20,20);
    box34=new Box(440,80,20,20);
    box35=new Box(460,80,20,20);
    box36=new Box(400,80,20,20);
    
  
    slingShot = new SlingShot(polygon.body,{x:200, y:100});
}

    

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    
    polygon.display();
    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   box24.display();
   box25.display();
   box26.display();
   box27.display();
   box28.display();
   box29.display();
   box30.display();
   box31.display();
   box32.display();
   box33.display();
   box34.display();
   box35.display();
   box36.display();

    slingShot.display();
   
     
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});


}
function mouseReleased(){
    slingShot.fly();

}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(polygon.body);
    }
}

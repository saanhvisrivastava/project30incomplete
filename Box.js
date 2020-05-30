class Box extends BaseClass {
  constructor(x,y,width,height,){
    super(x,y,width,height,);
  }
  display(){

    if(this.body.speed<2.3){
      super.display();

    }
     else{
       World.remove(world,this.body);
       push();
       this.visiblity=this.visiblity-5;
       tint (255,this.visiblity);
       
       
       
       pop();
     }   
      
    }
  

}
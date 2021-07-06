class snowf{

    constructor(x,y,r){
        var opt={
            friciton:0.1,
            density:0.1
            
        }
        this.body=Bodies.circle(x,y,r,opt)
        this.image=loadImage("snow5.webp")
        this.r=r
        World .add(world,this.body)
        
    }
    display(){
   
       imageMode (CENTER)
       image (this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    }
   
   }
   


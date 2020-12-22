class Pylogon{
    constructor(x,y,height,width){
        var options={
            isStatic:false
        }

        this.body=Bodies.rectangle(x,y,height,width,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;

        translate(pos.x,pos.y);
        push();
        rectMode(CENTER)
        rect(0,0,this.height,this.width);
        fill("yellow")
        pop();
    }
}
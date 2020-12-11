class Blocks{
    constructor(x,y,height,width){
        var options={
            isStatic:false,
            friction:0.5
        }
        this.body=Bodies.rectangle(x,y,height,width,options);
        this.height=height;
        this.width=width;

        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push();
        translat(pos.x,pos.y);
        rect(0,0,this.height,this.width);
        fill("red")
        pop();

    }
}
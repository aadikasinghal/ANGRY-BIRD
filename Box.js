class Box{
    constructor(){
        var obj = {
            restitution : 1,
            isStatic : false,
            friction : 1
        }

        this.body=Bodies.rectangle(100,100,50,50,obj);
        World.add(myWorld,this.body);
    
    }

    display(){
        var pos=this.body.position;
        
    }
}
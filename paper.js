class Paper{

constructor(x,y,width,height){
var options = {
    isStatic:false,
    'restitution':0.3,
    'friction':0,
    'density':1.2
}
this.x = x
this.y =y
this.width = width;
this.height = height;
this.image = loadImage("paper.png");
this.body = Bodies.rectangle(this.x,this.y,this.width, this.height, options);


World.add(world, this.body);
//paperObject.setCollider("rectangle",0,0,paperObject.width,paperObject.height) ;
//paperObject.debug = true
}
display(){
var pos = this.body.position;
push();
translate(pos.x, pos.y);
//rotate(angle);
imageMode(CENTER);
image(this.image, 0, 0, this.width, this.height);
pop();


}
}




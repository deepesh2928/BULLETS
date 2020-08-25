var bullet,wall;
var speed,weight;
var thickness;

function setup() {
	createCanvas(1000,400);

	speed=random(223,321);
	weight=random(30,52);
	thickness=random(22,83);

	bullet=createSprite(20,200,70,20);
	wall=createSprite(900,200,thickness,200);
}
function draw() {
 background(0,0,255);

 bullet.shapeColor=color(255,255,255);

 bullet.velocityX=speed;

 if(bullet.isTouching(wall)){
	bullet.velocityX=0;
 }
 if(((0.5*weight*speed*speed)/(thickness*thickness*thickness) < 10) && bullet.isTouching(wall)){
	wall.shapeColor=color(0,255,0);
 }
 if(((0.5*weight*speed*speed)/(thickness*thickness*thickness) > 10) && bullet.isTouching(wall)){
	wall.shapeColor=color(255,0,0);
 }
 drawSprites();
}
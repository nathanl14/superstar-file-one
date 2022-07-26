var smallforward=0

var followers=1000
var likes=0
level=0
socialtext=0
backgroundlevel=0
regscreen=0

function preload(){
//startbutton
startnowImg=loadImage("startnow.png")

//small foward position
sfImg=loadImage("sf.png")

//choose position question
choosepositionImg=loadImage("chooseposition.png")

//green border
greenborderImg=loadImage("greenblock.png")

//socialmedia icon
socialmediaImg=loadImage("socialmedia.png")

//background social
backgroundsocial=loadImage("backgroundsocial.png")
}

function setup(){
  createCanvas(375,667);
  background("blue");

startnow=createSprite(180,500)
startnow.addImage(startnowImg)
startnow.scale=1
startnow.setCollider("rectangle", 7, -5, 345, 70, 0);

smallforward=createSprite(220,400)
smallforward.addImage(sfImg)
smallforward.scale=0 //1.5
smallforward.debug=true
smallforward.setCollider("rectangle", -25, -22, 100, 70, 0);



chooseposition=createSprite(190,200)
chooseposition.addImage(choosepositionImg)
chooseposition.scale=0 //.7


greenborder=createSprite(200,450)
greenborder.addImage(greenborderImg)
greenborder.scale=0 //0.35
greenborder.rotation=90

socialmedia=createSprite(330,450)
socialmedia.addImage(socialmediaImg)
socialmedia.scale=0 //.17
//socialmedia.debug=true
socialmedia.setCollider("circle", 5, -25, 220,)

closesocialmedia=createSprite(174,585)
closesocialmedia.debug=true
closesocialmedia.setCollider("rectangle", 15, 0, 320, 140, 0)
closesocialmedia.visible=false
closesocialmedia.scale=0




 
}

function draw() {
  
  background("teal");
  
  if(backgroundlevel>=3){
  background("teal");
  }

if(mousePressedOver(closesocialmedia)){

closesocialmedia.scale=0
regscreen-=2
}





    if(mousePressedOver(socialmedia)){
     // socialtext+=1
      backgroundlevel+=1
      closesocialmedia.scale=1

      socialmedia.scale=0
      greenborder.scale=0

regscreen+=2
    }
if(backgroundlevel>=1){
  background(backgroundsocial)
}


  //if(socialtext>=1){
  
    //textSize(50)
   // text("Avg likes "+ likes,75,90)
  
   // textSize(30)
   // text("Followers "+ followers,57,140)




 // }
  

  textSize(30)
  text("level "+ level,75,20)

  textSize(30)
  text("socialtext "+ socialtext,160,34)

  textSize(20)
  text("regscreen "+ regscreen,240,44)


 
  textSize(50)
  fill(00,990,50)
  text(mouseX + "," +mouseY , mouseX, mouseY)



  drawSprites();
  rightafterstartnow()
  socialmediaprogress()
}
function rightafterstartnow(){
  if(mousePressedOver(startnow)){
startnow.scale=0
smallforward.scale=1.5
chooseposition.scale=.38
  }
  if(mousePressedOver(smallforward)){
    
    smallforward.y=40
    smallforward.x=40
    smallforward.scale=0.5

    regscreen+=1

  chooseposition.scale=0

  if(regscreen<=1){
  greenborder.scale=0.35 //0
  socialmedia.scale=.17 //0

  }
  }
}

function socialmediaprogress(){


  }
  




    //followers+=random(100,500)
    //if(followers>800){
    //likes+=random(100,300)
   // }
 

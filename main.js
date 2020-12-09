canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="car1.jpeg";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="car2.jpeg";
car2_x=10;
car2_y=10;

backgroung_image="download.jpeg";
rover_image="rover.png";
function add(){
  background_imgTag =new Image();
  background_imgTag.onload=uploadBackground;
  background_imgTag.src=background_image;

  car1_imgTag=new Image();
  car1_imgTag.onload=uploadcar;
  car1_imgTag.src=car1_image;

  car2_imgTag=new Image();
  car2_imgTag.onload=uploadcar;
  car2_imgTag.src=car2_image;
}
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
    ctx.drawImage(car1_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log (keyPressed);
    if(keyPressed=='38'){
        up();
        console.log ("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        reft();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }


    if(keyPressed=='87'){
        up();
        console.log ("W");
    }
    if(keyPressed=='65'){
        down();
        console.log("A");
    }
    if(keyPressed=='83'){
        reft();
        console.log("S");
    }
    if(keyPressed=='68'){
        right();
        console.log("D");
}
var canvas = document.getElementById("myCanvas");
var CTX = canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_X=10;
car1_Y=10;

car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_X=10;
car2_Y=100;

background_image="racing.jpg"

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}
function uploadbackground(){
    CTX.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    CTX.drawImage(car1_imgTag,car1_X,car1_Y,car1_width,car1_height);
}

function uploadcar2(){
    CTX.drawImage(car2_imgTag,car2_X,car2_Y,car2_width,car2_height);
}
if(car1_X > 900){
    console.log("car1 won")
    document.getElementById("game_status").innerHTML="Car 1 Won !";
}

window.addEventListener("keydown",kd);
function kd(e){
    keyPressed=e.keyCode;
    if(keyPressed=='38'){
        up1();
    }
    if(keyPressed=='37'){
        left1();
    }
    if(keyPressed=='39'){
        right1();
    }
    if(keyPressed=='40'){
        down1();
    }
    if(keyPressed=='87'){
        up2();
    }
    if(keyPressed=='65'){
        left2();
    }
    if(keyPressed=='68'){
        right2();
    }
    if(keyPressed=='83'){
        down2();
    }
}
function up1(){
    if(car1_Y>=0){
        car1_Y=car1_Y-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        console.log(car1_Y)
    } 
}
function down1(){
    if(car1_Y<=600){
        car1_Y=car1_Y+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        console.log(car1_Y)
    } 
}
function right1(){
    if(car1_X<=900){
        car1_X=car1_X+10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        console.log(car1_X)
        
    } 
}
function left1(){
    if(car1_X>=0){
        car1_X=car1_X-10;
        uploadbackground();
        uploadcar1();
        uploadcar2();
        console.log(car1_X)
    } 
}
function up2(){
    if(car2_Y>=0){
        car2_Y=car2_Y-10;
        uploadbackground();
        uploadcar2();
        uploadcar1();
        console.log(car2_Y)
    } 
}
function down2(){
    if(car2_Y<=600){
        car2_Y=car2_Y+10;
        uploadbackground();
        uploadcar2();
        uploadcar1();
        console.log(car2_Y)
    } 
}
function right2(){
    if(car2_X<=900){
        car2_X=car2_X+10;
        uploadbackground();
        uploadcar2();
        uploadcar1();
        console.log(car2_X)
    } 
}
function left2(){
    if(car2_X>=0){
        car2_X=car2_X-10;
        uploadbackground();
        uploadcar2();
        uploadcar1();
        console.log(car2_X)
    } 
}

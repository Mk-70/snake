var scl = 20;
var col;
var s;
var f;
var bg;
let pause = true;
var curdir = 'R';


    function setup(){
        createCanvas(600,600);
        bg = loadImage('image/DeadpoolGo.jpg');
    col = width/scl;
    s = new snake();
    f = new food();
    frameRate(50);
}


function draw(){
    background(51);
    //background(bg);
    s.show();
    f.show();
    // if(!pause)
    // {
    snakeai(f);
    s.update();
    
    s.eat();
    // pausegame();
// }
}

function pausegame()
{
    if(pause)
        pause = false;
    else
        pause = true;
}

const snakeai = function(fod)
	{
        console.log('snake ai called',s.x,s.y,s.xspeed,s.yspeed);
	var x = s.x - fod.pos.x;
    var y = s.y - fod.pos.y;

    console.log("curdir: ",curdir);
    console.log(x,y);
	if(x < 0 && curdir != 'L' && curdir != 'R')
	{
        curdir = 'R';
        keyPressedforai();
        
        
        console.log("Right Called");
	}
	else if(x >0 && curdir != 'R' && curdir != 'L')
	{
        curdir = 'L';

		keyPressedforai();
        console.log("Left Called");
	}
	else if(y >0 && curdir != 'D' && curdir != 'U')
	{
        curdir = 'U';

		keyPressedforai();
        console.log("Up Called");
	}
	else if(y <0 && curdir != 'U' && curdir != 'D')
	{
        curdir = 'D';
		keyPressedforai();
        console.log("Down Called");
    }
    else if(y==0)
    {

        console.log('special y=0 called');

        if(x < 0 && curdir != 'L' && curdir != 'R')
	{
        curdir = 'R';
        keyPressedforai();
        
        console.log("Right Called");
	}
	else if(x >0 && curdir != 'R' && curdir != 'L')
	{
        curdir = 'L';
		keyPressedforai();
        console.log("Left Called");
	}
    }
    else if(x==0)
    {
        console.log('special x=0 called')
         if(y >0 && curdir != 'D' && curdir != 'U')
	{
        curdir = 'U';
		keyPressedforai();
        console.log("Up Called");
	}
	else if(y <0 && curdir != 'U' && curdir != 'D')
	{
        curdir = 'D';
		keyPressedforai();
        console.log("Down Called");
    }

    }
    console.log('snake ai call ended',s.x,s.y,s.xspeed,s.yspeed);

	
	}



    function endgame()
    {
            print("END GAME");
            background(bg);
            // textSize(30);
            // textAlign(CENTER);
            fill(80,66,244);
            // text("Game Over", width/2, 50);
            
            textSize(40);
            textAlign(CENTER);
            text("Score: " + str(s.total - 1), width/2, 50);
            
            textSize(40);
            textAlign(CENTER, BOTTOM);
            text("Press Enter key to restart...", width/2, height);
    
            // textSize(40);
            // //textAlign(CENTER, BOTTOM);
            // textAlign(CENTER, BOTTOM);
            // text("Press BACKSPACE to exit...", width/2, 3*height/4);
            
            
                //noLoop();
                //resizeCanvas(0,0);
                //window.close();
                /*keyPressed = function(){
                    if(keyCode === BACKSPACE)
                        stop();
                }*/
            
                
            noLoop();
    }

function keyPressedforai(){
    
if(curdir == 'U')
{
    if(s.xspeed != 0 && s.yspeed != 1)
    	s.dir(0,-1);
    
}
else if(curdir == 'D')
{
    if(s.xspeed != 0 && s.yspeed != -1)
        s.dir(0,1);
}
else if(curdir == 'R')
{

    if(s.xspeed != -1 && s.yspeed != 0)
        s.dir(1,0);
}

else if(curdir == 'L')
{
    if(s.xspeed != 1 && s.yspeed != 0)
        s.dir(-1,0)
}


else if(keyCode == ENTER)
   	pausegame();
    
}

function keyPressed(){

    // if(keyCode === UP_ARROW)
    //     s.dir(0,-1);
    //  else if(keyCode === DOWN_ARROW)
    //     s.dir(0,1);
    //  else if(keyCode === RIGHT_ARROW)
    //     s.dir(1,0);
    //  else if(keyCode === LEFT_ARROW)
    //     s.dir(-1, 0);
        if(keyCode === ENTER)
       {
           setup();
           loop();
       }
       else if(keyCode === BACKSPACE)
            window.close();
}

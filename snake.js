function snake()
{
    this.x = floor(random(col))*scl;
    this.y = floor(random(col))*scl;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 1;
    this.body = [];
    this.body.push(createVector(this.x,this.y))



    this.show = function()
    {
        fill(0,255,0);
        for(var i = 0;i<this.body.length;i++)
        {
            rect(this.body[i].x , this.body[i].y, scl, scl);
        }
    }
    this.update = function(){

        this.x += this.xspeed * scl;
        this.y += this.yspeed * scl;

        // this.x = constrain(this.x, 0 , width-scl);
        // this.y = constrain(this.y, 0 , width-scl);
        this.death();

        this.body.unshift(createVector(this.x,this.y));
        this.body.pop();


    }

    this.dir = function(xc, yc){
        this.xspeed = xc;
        this.yspeed = yc;

    }

    this.eat = function(){
        var d = dist(this.x, this.y, f.pos.x, f.pos.y);
        if(d < 1)
        {
            f.foodLocation();
            this.body.unshift(createVector(this.x,this.y));
            this.total++;
        }
        console.log('eat',this.body);
    }

    this.death = function(){
        var curtemppos = createVector(this.x,this.y);
        for(var i = 1;i<this.body.length;i++)
        {
            if(this.body[i].equals(curtemppos))
            {
                console.log('gameover');
                this.body.splice(1);
                endgame();
            
            }
        
        }
        if(this.x <0 || this.x>width || this.y <0||this.y>height)
        {
            console.log('gameover');
            this.body.splice(1);
            //setup();
            endgame();
            
        }
    }
}
function food()
{
     //floor(random(col))*scl;
     //floor(random(col))*scl;

    this.pos = createVector(floor(random(col))*scl,floor(random(col))*scl)
    //this.pos.x
    //this.pos.y
   this.foodLocation = function(){
    this.pos = createVector(floor(random(col))*scl,floor(random(col))*scl);
   }

    this.show = function()
    {
        fill(140,0,125);
        rect(this.pos.x , this.pos.y, scl, scl);
    }


}   
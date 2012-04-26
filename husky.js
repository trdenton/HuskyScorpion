var Husky = {};	//EVERYTHING IS HELD IN HERE
Husky.cS = {};	//context switcher
Husky.cE = {};	//collison engine
Husky._ids = 0;


document.onload = function()
{
	
}

Husky.cS.contexts = {};	//array of context objects

function Context()
{
	this.entities = [];//array of objects	
	this.updateHook = function(){};
}

function Entity()
{
	//private fields
	var vx=0;
	var vy=0;
	var anims={};
	var curFrame;
	var curAnim;
	var lastTime;
	//private methods
	this.update = function()
	{
		//update animation
		if(curAnim != undefined)
		{
			var chgDex = 1;
			if (lastTime != undefined)
				chgDex = floor((time-lastTime)/(1000*anims{curAnim}{fps}));
			curFrame = (curFrame + chgDex)%(anims{curAnim}{imgs}.length);	//num frames to skip ahead
		}
		lastTime = time;
		this.updateHook();
	}
	this.getImg = function()
	{
		return anims{curAnim}{imgs}[curFrame];
	}
	//public fields
	this.x=0;
	this.y=0;
	this.height=0;
	this.width=0;
	this.id = Husky._ids++;
	this.type="Entity";
	//public methods
	this.collide = function(type,id){};
	this.updateHook=function(){};
	this.addAnim = function(name,anim){anims{name}=anim };
}
function Surface()
{
	this = new Entity();
	this.type="Surface";
	this.anchored=true;
}
function Sprite()
{
	this = new Entity();
	this.type="Sprite";
	this.anchored=false;
}

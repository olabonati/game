class Player {
    constructor() {
      this.width = 4;
      this.height = 10;
      this.positionY =40;
      this.positionX = 0;
      this.DomElement = null;
      this.createDomElement();
    }
  ///cteate DOM
    createDomElement() {
      this.newPlayerElm = document.createElement("div");
      this.newPlayerElm.className = "player";
      this.newPlayerElm.style.top = this.positionY + "vh";
      this.newPlayerElm.style.left = this.positionX + "vw";
      this.newPlayerElm.style.height = this.height + "vh";
      this.newPlayerElm.style.width = this.width + "vw";
      const parentElm = document.getElementById("board");


      parentElm.appendChild(this.newPlayerElm);

      /*const newImg = document.createElement('img');
      this.newPlayerElm.appendChild(newImg);
      newImg.setAttribute("src", "./giphy.gif");
      newImg.style.top = this.positionY + "px";
      this.newPlayerElm.style.height = this.height + "px";
      newImg.style.width = this.width + "px";*/
    }
  
    moveUp() {
       if (this.positionY>0){
      this.positionY -= 1;
      this.newPlayerElm.style.top = this.positionY + "vh";

    }}
  
    moveDown() {
        const boardElement = document.getElementById("board");
        const boardHeight = boardElement.offsetHeight;
        
        if (this.positionY + this.height < 50) {
          this.positionY += 1;
          this.newPlayerElm.style.top = this.positionY + "vh";
        }
      }
      }

  
  document.addEventListener('keydown', function(event) {
    console.log("User pressed key: " + event.key);
  
    if (event.key === "ArrowUp") {
      player.moveUp();
    } else if (event.key === "ArrowDown") {
      player.moveDown();
    }
  });
  ////create an obstacle
  class Clouds {
    constructor() {
      this.width = 4;
      this.height = 10;
      this.positionY = Math.floor(Math.random() * (70 - 50 + this.height)+8);
      this.positionX = 47;
      this.newCloudElm = null; 
      this.createDomElement();

  
    }
    createDomElement() {
        this.newCloudElm = document.createElement("div");
        this.newCloudElm.className = "clouds";
        this.newCloudElm.style.top = this.positionY + "vh";
        this.newCloudElm.style.left = this.positionX + "vw";
        this.newCloudElm.style.height = this.height + "vh";
        this.newCloudElm.style.width = this.width + "vw";
        this.newCloudElm.style.backgroundImage = "url('/images/giphy-cloud.gif')";

        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.newCloudElm);

        
      }



    moveLeft(){
      this.positionX -= 1;
      this.newCloudElm.style.left = this.positionX + "vw";

    }
    }
const player = new Player();
const cloudsArr = [];
    ///create new obstacle every 2 sec//
setInterval(()=> {
const newCloud = new Clouds();
cloudsArr.push(newCloud);
},2000);

setInterval (() => {
    cloudsArr.forEach((cloudInstance) => {
        cloudInstance.moveLeft();
        if (
            cloudInstance.positionX < player.positionX + player.width &&
            cloudInstance.positionX + cloudInstance.width > player.positionX &&
            cloudInstance.positionY < player.positionY + player.height &&
            cloudInstance.height + cloudInstance.positionY > player.positionY)
            
            console.log("game over biatch");}

    
)}, 100);

    





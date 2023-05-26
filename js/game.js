class Player {
  constructor() {
    this.width = 4;
    this.height = 7;
    this.positionY =40;
    this.positionX = 0;
    this.score = 0;
    this.scoreDisplay = document.getElementById("score");
    this.updateScore();
    this.newPlayerElm = null;
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
    updateScore(){
      this.scoreDisplay.textContent = this.score;

    }
    increaseScore(amount){
      this.score += amount;
      this.updateScore();
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

document.querySelector("#start").addEventListener('click', ()=> {
  window.location.reload();

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



function collisionAndScore (cloudInstance){
  if (
    cloudInstance.positionX < player.positionX + player.width &&
    cloudInstance.positionX + cloudInstance.width > player.positionX &&
    cloudInstance.positionY < player.positionY + player.height &&
    cloudInstance.height + cloudInstance.positionY > player.positionY)
    {
      window.location.href =  "https://greenly.earth/en-us/blog/ecology-news/what-is-the-carbon-footprint-of-data-storage";

    }
  if (cloudInstance.positionX <= 0) {
    //delete current cloud
    const parentElm = document.getElementById("board");
    parentElm.removeChild(cloudInstance.newCloudElm);
    cloudsArr.splice(cloudsArr.indexOf(cloudInstance), 1);

    //increase score
    player.increaseScore(1);
 
  }}

setInterval (() => {
    cloudsArr.forEach((cloudInstance) => {
        cloudInstance.moveLeft();
        collisionAndScore(cloudInstance);
      });
    
}, 100);





class Trash {
  constructor() {
    this.width = 4;
    this.height = 20;
    this.positionY = Math.floor(Math.random() * (60 - 50 + this.height )+10);
    this.positionX = 47;
    this.newTrashElm = null; 
    this.score = 0;
    this.createDomElement();


  }
  createDomElement() {
    this.newTrashElm = document.createElement("div");
    this.newTrashElm.className = "trash";
    this.newTrashElm.style.top = this.positionY + "vh";
    this.newTrashElm.style.left = this.positionX + "vw";
    this.newTrashElm.style.height = this.height + "vh";
    this.newTrashElm.style.width = this.width + "vw";

    const parentElm = document.getElementById("board");

    parentElm.appendChild(this.newTrashElm);

  
  }

  deleteTrash (trashIndex) {
    if (this.positionX <= 0){
    // Delete current trash item
   // const parentElm = document.getElementById("board");
   // parentElm.removeChild(this.newTrashElm);
   this.newTrashElm.remove()
    trashArr.splice(trashIndex, 1);

  }}


moveLeft(){
  this.positionX -= 1;
  this.newTrashElm.style.left = this.positionX + "vw";

}

}

const trashArr=[];
    ///create new trash every 5.4 sec//

setInterval(()=> {
  const newTrash = new Trash();
  trashArr.push(newTrash);
  },4500);

  setInterval(() => {
    trashArr.forEach((trashInstance, index) => {
      trashInstance.moveLeft();
      trashInstance.deleteTrash(index);
    });
  }, 200);

  function collectingAndScore(trashInstance,) {
    if (
      trashInstance.positionX < player.positionX + player.width &&
      trashInstance.positionX + trashInstance.width > player.positionX &&
      trashInstance.positionY < this.player.positionY + player.height &&
      trashInstance.height + trashInstance.positionY > player.positionY
    ) {  
      player.increaseScore(10);}
      
           }
    
    



    
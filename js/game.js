class Player {
    constructor() {
      this.width = 100;
      this.height = 120;
      this.positionY = 2;
      this.positionX = -10;
      this.DomElement = null;
      this.createDomElement();
    }
  ///cteate DOM
    createDomElement() {
      this.newPlayerElm = document.createElement("div");
      this.newPlayerElm.id = "player";
      this.newPlayerElm.style.top = this.positionY + "px";
      this.newPlayerElm.style.left = this.positionX + "vw";
      const parentElm = document.getElementById("board");
      parentElm.appendChild(this.newPlayerElm);

      const newImg = document.createElement('img');
      this.newPlayerElm.appendChild(newImg);
      newImg.setAttribute("src", "./giphy.gif");
      newImg.style.top = this.positionY + "vh";
      this.newPlayerElm.style.height = this.height + "px";
      newImg.style.width = this.width + "px";
    }
  
    moveUp() {
      this.positionY -= 10;
      this.newPlayerElm.style.top = this.positionY + "px";

    }
  
    moveDown() {
      this.positionY += 10;
      this.newPlayerElm.style.top = this.positionY + "px";
    }

}
  const player = new Player();
  
  document.addEventListener('keydown', function(event) {
    console.log("User pressed key: " + event.key);
  
    if (event.key === "ArrowUp") {
      player.moveUp();
    } else if (event.key === "ArrowDown") {
      player.moveDown();
    }
  });
  
  class Clouds {
    constructor() {
      this.width = 100;
      this.height = 120;
      this.positionY = 2;
      this.positionX = -10;
    }
  }
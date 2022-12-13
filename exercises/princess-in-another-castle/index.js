class Player {
    constructor(name, totalCoins, status, hasStar) {
      this.name = "";
      this.totalCoins = 0;
      this.status = "";
      this.hasStar = false;
    }
  
    setName = (namePicked) => {
      this.name = namePicked;
    }
  
    gotHit = () => {
      if (this.status === "Powered Up") {
        this.status = "Big";
      } else if (this.status === "Big") {
        this.status = "Small";
      } else if (this.status === "Small") {
        this.status = "Dead";
      }
    }
  
    gotPowerup = () => {
      if (this.status === "Small") {
        this.status = "Big";
      } else if (this.status === "Big") {
        this.status = "Powered Up";
      } else if (this.status === "Powered Up") {
        this.hasStar = true;
        console.log("you got a star!")
      }
    }
  
    addCoin = () => {
      this.totalCoins++;
    }
  
    print = () => {
      console.log(`Name: ${this.name}`);
      console.log(`Total Coins: ${this.totalCoins}`);
      console.log(`Status: ${this.status}`);
      console.log(`Star: ${this.hasStar}`);
    }

}

randomRange = () => {
    return Math.random(math.Floor(randomValue * 3))
}

const player = new Player("Luigi", 0 , "big", false);

setInterval(() => {
  const randomValue = randomRange();

  if (randomValue === 0) {
    player.gotHit();
  } else if (randomValue === 1) {
    player.gotPowerup();
  } else if (randomValue === 2) {
    player.addCoin();
  }

  player.print();

  if (player.status === "Dead") {
    clearInterval(interval);
  }
}, 1000);




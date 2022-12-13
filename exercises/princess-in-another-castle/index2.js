class Player {
    constructor(name) {
      this.name = name;
      this.totalCoins = 0;
      this.status = "Powered Up";
      this.hasStar = false;
    }
  
    setName(namePicked) {
      this.name = namePicked;
    }
  
    gotHit() {
      if (this.status === "Powered Up") {
        this.status = "Big";
      } else if (this.status === "Big") {
        this.status = "Small";
      } else if (this.status === "Small") {
        this.status = "Dead";
      }
    }
  
    gotPowerup() {
      if (this.status === "Small") {
        this.status = "Big";
      } else if (this.status === "Big") {
        this.status = "Powered Up";
      } else if (this.status === "Powered Up" && !this.hasStar) {
        this.hasStar = true;
        console.log("YOU HAVE A STAR!")
      }
    }
  
    addCoin() {
      this.totalCoins++;
    }
  
    print() {
      console.log(`Name: ${this.name}`);
      console.log(`Status: ${this.status}`);
      console.log(`Total Coins: ${this.totalCoins}`);
    }

    randomRange() {
        return Math.floor(Math.random() * 3);
      }
    
      startGame() {
        const interval = setInterval(() => {
          const random = this.randomRange();
          if (random === 0) {
            this.gotHit();
          } else if (random === 1) {
            this.gotPowerup();
          } else if (random === 2) {
            this.addCoin();
          }
    
          this.print();
    
          if (this.status === "Dead") {
            clearInterval(interval);
          }
        }, 1000);
      }





  }
  

  const player = new Player("Mario");
player.setName("Luigi");
player.gotHit();
player.gotPowerup();
player.addCoin();
player.print();
player.randomRange();
player.startGame();

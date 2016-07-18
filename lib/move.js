class Move {
  constructor (player) {
    this.player = player;
    this.dx = 0;
    this.dy = 0;

  }

  playerStart(player){
    if (player === 1){
      this.movePlayerOne(player)
    }
    else if (player === 2){
      this.movePlayerTwo(player)
    }
    else if (player === 3){
      this.movePlayerThree(player)
    }
    else
      this.movePlayerFour(player)
  }

  movePlayerOne(player){
    if (player.rightPressed) {
      player.moveRightPlayerOne(player);
    } else if (player.leftPressed && player.x > 0) {
      player.moveLeftPlayerOne(player);
    }
  }

  moveRightPlayerOne(player){
    player.dx = 9;
    player.dy = -9;
      if (player.x > player.oneThirdWidth - player.paddleWidth && !player.vertical) {
        player.vertical = true;
        player.x = player.oneThirdWidth;
        player.y = player.oneThirdWidth - player.paddleWidth;
      } else if (player.vertical && player.y >= 0) {
        player.y -= 9;
      } else if (!player.vertical) {
        player.x += 9;
      }
    }

  moveLeftPlayerOne(player){
      player.dx = -9;
      player.dy = 9;
      if (player.y > player.oneThirdWidth - player.paddleWidth && player.vertical) {
        player.vertical = false;
        player.x = player.oneThirdWidth - player.paddleWidth;
        player. y = player.setPaddleY();
      } else if (player.vertical) {
        player.y += 9;
      } else if (!player.vertical) {
        player.x -= 9;
      }
  }

  movePlayerTwo(player){
    if (player.rightPressed && player.x < player.canvas - player.paddleWidth) {
      player.dx = 9;
      player.dy = 9;
      if (player.y > player.setPaddleY() - player.paddleWidth && player.vertical) {
        player.vertical = false;
        player.x = player.oneThirdWidth * 2;
        player.y = player.setPaddleY();
      } else if (player.vertical) {
        player.y += 9;
      } else if (!player.vertical) {
        player.x += 9;
      } else if (player.leftPressed) {
        player.dx = -9;
        player.dy = -9;
        if (player.x < player.oneThirdWidth * 2) {
          player.vertical = true;
          player.x = player.oneThirdWidth * 2;
          player.y = player.setPaddleY() - player.paddleWidth;
        } else if (player.vertical && player.y > 0) {
          player.y -= 9;
        } else if (!player.vertical) {
          player.x -= 9;
        }
  }
  }
}

  movePlayerThree(player){
    if (this.rightPressed) {
      this.dx = 9;
      this.dy = 9;
      if (this.x > this.oneThirdWidth - this.paddleWidth && !this.vertical) {
        this.vertical = true;
        this.x = this.oneThirdWidth;
        this.y = this.oneThirdHeight * 2;
      } else if (this.vertical && this.y + this.paddleWidth < this.canvas) {
        this.y += 9;
      } else if (!this.vertical) {
        this.x += 9;
      }
    } else if (this.leftPressed && this.x > 0) {
      this.dx = -9;
      this.dy = -9;
      if (this.y < this.oneThirdHeight * 2) {
        this.x = this.oneThirdWidth - this.paddleWidth;
        this.y = this.oneThirdHeight * 2;
        this.vertical = false;
      } else if (this.vertical) {
        this.y -= 9;
      } else if (!this.vertical) {
        this.x -= 9;
      }
    }
  }

  movePlayerFour(player){
    if (this.rightPressed && this.x < this.canvas - this.paddleWidth) {
      this.dx = 9;
      this.dy = -9;
      if (this.y < this.oneThirdWidth * 2) {
        this.x = this.oneThirdWidth * 2;
        this.y = this.setPaddleY();
        this.vertical = false;
      } else if (this.vertical) {
        this.y -= 9;
      } else if (!this.vertical) {
        this.x += 9;
      }
    } else if (this.leftPressed) {
      this.dx = -9;
      this.dy = 9;
      if (this.x < this.oneThirdWidth * 2) {
        this.x = this.oneThirdWidth * 2;
        this.y = this.oneThirdHeight * 2;
        this.vertical = true;
      } else if (this.vertical && this.y < this.canvas - this.paddleWidth) {
        this.y += 9;
      } else if (!this.vertical) {
        this.x -= 9;
      }
    }
  }
  }

module.exports = move;

let move = class Move {
  constructor (player) {
    this.player = player;
    this.dx = 0;
    this.dy = 0;
  }

  playerStart(player){
    if (this.player === 1){
      this.movePlayerOne(player);
    }
    else if (this.player === 2){
      this.movePlayerTwo(player);
    }
    else if (this.player === 3){
      this.movePlayerThree(player);
    }
    else{
      this.movePlayerFour(player);
    }
  }

  movePlayerOne(player){
    if (player.rightPressed) {
      this.moveRightPlayerOne(player);
    } else if (player.leftPressed && player.x > 0) {
      this.moveLeftPlayerOne(player);
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
      }
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

  movePlayerThree(player){
    if (player.rightPressed) {
      player.dx = 9;
      player.dy = 9;
      if (player.x > player.oneThirdWidth - player.paddleWidth && !player.vertical) {
        player.vertical = true;
        player.x = player.oneThirdWidth;
        player.y = player.oneThirdHeight * 2;
      } else if (player.vertical && player.y + player.paddleWidth < player.canvas) {
        player.y += 9;
      } else if (!player.vertical) {
        player.x += 9;
      }
    } else if (player.leftPressed && player.x > 0) {
      player.dx = -9;
      player.dy = -9;
      if (player.y < player.oneThirdHeight * 2) {
        player.x = player.oneThirdWidth - player.paddleWidth;
        player.y = player.oneThirdHeight * 2;
        player.vertical = false;
      } else if (player.vertical) {
        player.y -= 9;
      } else if (!player.vertical) {
        player.x -= 9;
      }
    }
  }

  movePlayerFour(player){
    if (player.rightPressed && player.x < player.canvas - player.paddleWidth) {
      player.dx = 9;
      player.dy = -9;
      if (player.y < player.oneThirdWidth * 2) {
        player.x = player.oneThirdWidth * 2;
        player.y = player.setPaddleY();
        player.vertical = false;
      } else if (player.vertical) {
        player.y -= 9;
      } else if (!player.vertical) {
        player.x += 9;
      }
    } else if (player.leftPressed) {
      player.dx = -9;
      player.dy = 9;
      if (player.x < player.oneThirdWidth * 2) {
        player.x = player.oneThirdWidth * 2;
        player.y = player.oneThirdHeight * 2;
        player.vertical = true;
      } else if (player.vertical && player.y < player.canvas - player.paddleWidth) {
        player.y += 9;
      } else if (!player.vertical) {
        player.x -= 9;
      }
    }
  }
  }

module.exports = move;

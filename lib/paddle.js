const Move = require('./move.js');

let paddle = class Paddle {
  constructor (playerNumber, canvas) {
    this.player = playerNumber;
    this.canvas = canvas;
    this.paddleWidth = 60;
    this.paddleHeight = 8;
    this.leftPressed = false;
    this.rightPressed = false;
    this.vertical = false;
    this.x = this.setPaddleX();
    this.y = this.setPaddleY();
    this.oneThirdWidth = canvas / 3;
    this.oneThirdHeight = canvas / 3;
    this.dx = 0;
    this.dy = 0;
    this.rightKeyCode = this.setupRightKeyCode();
    this.leftKeyCode = this.setupLeftKeyCode();
  }
  draw(ctx, color) {
    ctx.beginPath();
    if (this.vertical) {
      ctx.rect(this.x, this.y, this.paddleHeight, this.paddleWidth);
    } else {
      ctx.rect(this.x, this.y, this.paddleWidth, this.paddleHeight);
    }
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    var move = new Move(this.player);
    move.playerStart(this);
  }
  setPaddleX() {
    if (this.player === 1 || this.player === 3) {
      return 10;
    } else if (this.player === 2 || this.player === 4) {
      return this.canvas - 10 - this.paddleWidth;
    }
  }
  setPaddleY() {
    if (this.player === 1 || this.player === 2) {
      return this.canvas / 3;
    } else if (this.player === 3 || this.player === 4) {
      return (this.canvas / 3) * 2;
    }
  }
  setupPaddleEventListeners() {
    let self = this;
    $(document).on('keydown', function(e) {
      if (e.keyCode === self.rightKeyCode) {
        self.rightPressed = true;
      } else if (e.keyCode === self.leftKeyCode) {
        self.leftPressed = true;
      }
    });
    $(document).on('keyup', function(e) {
      if (e.keyCode === self.rightKeyCode) {
        self.rightPressed = false;
      } else if (e.keyCode === self.leftKeyCode) {
        self.leftPressed = false;
      }
    });
  }
  setupLeftKeyCode() {
    if (this.player === 1) {
      return 49;
    } else if (this.player === 2) {
      return 48;
    } else if (this.player === 3) {
      return 90;
    } else if (this.player === 4) {
      return 37;
    }
  }
  setupRightKeyCode() {
    if (this.player === 1) {
      return 81;
    } else if (this.player === 2) {
      return 80;
    } else if (this.player === 3) {
      return 88;
    } else if (this.player === 4) {
      return 39;
    }
  }
  bottom() {
    if (this.vertical) {
      return this.y + this.paddleWidth;
    } else {
      return this.y + this.paddleHeight;
    }
  }
  right() {
    if(this.vertical) {
      return this.x + this.paddleHeight;
    } else {
      return this.x + this.paddleWidth;
    }
  }


};

module.exports = paddle;

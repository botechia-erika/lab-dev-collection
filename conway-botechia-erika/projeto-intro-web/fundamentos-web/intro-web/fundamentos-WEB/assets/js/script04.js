const Scores = require('./Scoreboard');
// const Scores = new ScoreBoard();

class Jogador {
  constructor(jogador) {
    this.name = jogador;
  }
  getName() {
    return this.jogador;
  }
  wins(points) {
    Scores.update(this.name, points);
  }
  loses(points) {
    Scores.update(this.name, -points);
  }
}

module.exports = Player;
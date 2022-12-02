/* global Phaser */

// Copycright (c) 2022 Rodas Nega All rights reerved
//
// Created by: Rodas Nega
// Created on: Dec 2022
// This is the Phaser3 configuration file

//* Game Scene */
const config = {
  type: Phaser.AUTO, 
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    autocenter: Phaser.Scale.CENTER_BOTH  
  }
}

const game = new Phaser.Game(config)
console.log(game)
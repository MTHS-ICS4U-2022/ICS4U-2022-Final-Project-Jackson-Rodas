/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// this is the Phaser3 configuration file

import SplashScene from './splashScene.js'

// the game scene
const splashScene = new SplashScene()

//* Game scene */
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
  backgroundColor: 0x023020,
  scale: {
   mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// loads the scene
game.scene.add('splashScene', splashScene)

game.scene.start('splashScene')
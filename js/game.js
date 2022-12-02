/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// this is the Phaser3 configuration file

// These are the class imports
import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'
import MenuScene from './menuScene.js'
import GameScene from './gameScene.js'

// The mother teresa splash scene
const splashScene = new SplashScene()

// The frogger image, with title
const titleScene = new TitleScene()

// The other frog image, with click prompt
const menuScene = new MenuScene()

// The main game scnee with the frog, water, roads, cars, etc.
const gameScene = new GameScene()


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
  // The background colour
  backgroundColor: 0xffffff,

  // the scale of the background
  scale: {
   mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

// the game configuration
const game = new Phaser.Game(config)

// loads the scenes
// Mother teresa splash scene
game.scene.add('splashScene', splashScene)

// frogger with title screen
game.scene.add('titleScene', titleScene)

// frog with click prompt scene
game.scene.add('menuScene', MenuScene)

// the game scene with frog, cars, water, etc
game.scene.add('gameScene', GameScene)

game.scene.start('splashScene')
/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Game scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({key: 'gameScene'})

    this.background = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

 preload () {
   console.log('Game Scene')

   // images
  this.load.image('frogger-background', 'assets/frogger-background.png')
  this.load.image('ship', 'assets/spaceShip.png')
 }

  create(data) {
    this.background = this.add.image(0, 0, 'frogger-background')
    this.background.setOrigin(0,0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 50, 'ship')
  }

  update(time, delta) {
    
  }
}

export default GameScene
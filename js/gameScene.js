/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Game scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({key: 'gameScene'})

    // what the background is
    this.background = null

    //this.frog = null
  }

  init (data) {
    // The colour
    this.cameras.main.setBackgroundColor('#ffffff')
  }

 preload () {
   console.log('Game Scene')

   // images
   // The background with water, frog, lakes, etc
  this.load.image('frogger-background', 'assets/frogger-background.png')

   // the playable frog charactor
  this.load.image('frog', 'assets/frog.png')
 }

  create(data) {
    // the image of the background
    this.background = this.add.image(0, 0, 'frogger-background')
    this.background.setOrigin(0,0)

    // the frog with physics
     this.frog = this.physics.add.sprite(1920 / 2, 1080 - 50, 'frog').setScale(0.25)
  }

  update(time, delta) {
    
    // fps is in 60 times a second
    const keyUpObj = this.input.keyboard.addKey('UP')
    if (keyUpObj.isDown === true) {
      this.frog.y -= 80
      if (this.frog.y < 40)
        this.frog. y = 40
    }
    const keyDownObj = this.input.keyboard.addKey('DOWN')
    if (keyDownObj.isDown === true) {
      this.frog.y += 80
      if (this.frog.y > 1040)
        this.frog.y = 1040
    }
    const keyLeftObj = this.input.keyboard.addKey('LEFT')
      if (keyLeftObj.isDown === true) {
      this.frog.x -= 80
       if (this.frog.x < 40)
        this.frog.x = 40
    }
    const keyRightObj = this.input.keyboard.addKey('RIGHT')
      if (keyRightObj.isDown === true) {
      this.frog.x += 80
      if (this.frog.x > 1880)
        this.frog.x = 1880
    }
  }
}

export default GameScene
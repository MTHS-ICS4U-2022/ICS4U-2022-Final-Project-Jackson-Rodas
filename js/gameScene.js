/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Game scene

// importing frog class
import Frog from './frogClass.js'

// redefining froggy
const frogs = new Frog()

class GameScene extends Phaser.Scene {
  constructor () {
    super({key: 'gameScene'})

    // what the background is
    this.background = null

    this.frog = null
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
    //this.frog = this.load.image('frog', 'assets/frog.png')
   // this.frog =  this.load.image('frog', 'assets/frog.png')
 }

  create(data) {
    // the image of the background
    this.background = this.add.image(0, 0, 'frogger-background')
    this.background.setOrigin(0,0)

    this.frog = frogs.getFroggy()
    // the frog with physics
     // this.frog = this.physics.add.sprite(1920 / 2, 1080 - 50, 'frog').setScale(0.25)
  }

  update(time, delta) {
  }
}

export default GameScene
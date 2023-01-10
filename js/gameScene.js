/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Game scene

// importing frog class
import Frog from './frogClass.js'


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

preload() {
   console.log('Game Scene')
   // images
   // The background with water, frog, lakes, etc
   this.load.image('frogger-background', 'assets/new-frogger-background.png')

   this.load.image('frog', 'assets/frog.png')
   // the playable frog charactor
   // frog = this.load.image('frog', 'assets/frog.png')
 }

  create(data) {
    
    // the image of the background
    this.background = this.add.image(0, 0, 'frogger-background')
    this.background.setOrigin(0,0)

     //let frog = this.add.sprite(game.config.width/2, game.config.height/2, "frog")

    let frog =new Frog({scene:this,x:1920/2,y:2080/2}).setScale(0.25)

    this.frog = frog
    
    //let frog = this.add.sprite(game.config.width/2, game.config.height/ 2, "frog")

    // this.frog = new Frog(this, 400, 300, 'frog')
    // const frog = new Frog(this, 1920 / 2, 1080 - 50, 'frog').setScale(0.25)
     //this.frog = new Frog(this, 1920 / 2, 1080 - 50, 'frog').setScale(0.25)
      // frog = new Frog(this, 1920 / 2, 1080 - 50, 'frog').setScale(0.25)
    // frog.create()
    //const frog = this.add.frog(400, 300)
   // frog.update()
    //this.add.existing(frog)
  }

  update(time, delta) {
    let keyW
    let keyA
    let keyS
    let keyD
    
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
     keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
     keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

    if (keyW.isDown) {
      this.frog.frogUp()
      console.log("Up")
    } else if (keyA.isDown){
        this.frog.frogLeft()
      console.log("Left")
    } else if(keyS.isDown) {
        this.frog.frogDown()
      console.log("Down")
    } else if(keyD.isDown) {
        this.frog.frogRight()
        console.log("Right")
    }
    if (this.frog.y < 60) {
      this.scene.switch('winScene')
    }
    }
  }

export default GameScene

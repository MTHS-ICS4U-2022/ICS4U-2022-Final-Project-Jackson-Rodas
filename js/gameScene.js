/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Game scene

// importing frog class
import Frog from './frogClass.js'

import Car from './carClass.js'

class GameScene extends Phaser.Scene {
  constructor () {
    super({key: 'gameScene'})

    // what the background is
    this.background = null

    this.frog = null

    // this.car = null
    this.cars = []

  }

init (data) {
    // The colour
    this.cameras.main.setBackgroundColor('#ffffff')
  }

preload() {
   // the game scene
   console.log('Game Scene')
   // images
   // The background with water, frog, lakes, etc
   this.load.image('frogger-background', 'assets/new-frogger-background.png')

     // the playable frog charactor
   this.load.image('frog', 'assets/frog.png')

  // the car charactor
   this.load.image('car', 'assets/car.png')
 }

  create(data) {
    
    // the image of the background
    this.background = this.add.image(0, 0, 'frogger-background')
    this.background.setOrigin(0,0)

    let frog = new Frog({scene:this,x:1920/2,y:2080/2}).setScale(0.175)

    // frog.body.checkCollision.down = false
    // this.frog = this.physics.add.sprite(1920 / 2, 1080 - 100, 'frog')
    this.frog = frog

    // this.frog.create(data)

    let carProperties = [960, 870, 780, 700, 620, 460, 370, 290, 200, 120]

    for (let i = 0; i < carProperties.length; i++) {
      this.cars[i] = new Car({scene:this,x:1880,y:carProperties[i]}).setScale(2)
    }
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

    // this.car.update()
    for (let i = 0; i < this.cars.length; i++) {
      this.cars[i].update()
    }

   // this.physics.world.collide(this.frog, this.cars);
   //   this.scene.switch('winScene')
    // game.physics.arcade.collide(this.frog, this.cars);
    //if (this.frog.body.checkCollision) {
    //  console.log("Collided")
    //}

    //this.frog.touchingCar()
    //config.physics.arcade.collide(this.car, this.frog)
  }
}

export default GameScene

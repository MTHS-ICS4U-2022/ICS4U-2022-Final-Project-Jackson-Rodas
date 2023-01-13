/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Game scene

// importing frog class
import Frog from './ThingsThatMove/frogClass.js'

// importing car class
import Car from './ThingsThatMove/carClass.js'

class GameScene extends Phaser.Scene {
  constructor () {
    super({key: 'gameScene'})

    // what the background is
    this.background = null

    // what the frog starts ass
    this.frog = null

    // what the cars start ass
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

    // Background Audio that plays during the game
    this.load.audio('BackgroundAudio', 'assets/BackgroundMusic.wav')

    // Destruction Audio that plays when the frog gets hit
    this.load.audio('Destruction', 'assets/DestructionMusic.mp3')
  }

  create(data) {
    
    // the image of the background
    this.background = this.add.image(0, 0, 'frogger-background')

    // the origin of the background
    this.background.setOrigin(0,0)

    // Background Audio starts
    this.sound.play('BackgroundAudio')

    // calling and setting the frog
    let frog = new Frog({scene:this,x:1920/2,y:2080/2}).setScale(0.175)

    // letting the frog = this.frog
    this.frog = frog

    // the individual cars x and y coordinates
    // actually y since x does not change
    let carProperties = [960, 870, 780, 700, 620, 460, 370, 290, 200, 120]

    // loop that creates the cars, if there is not as many cars
    // that are in the car properties array
    for (let counter = 0; counter < carProperties.length; counter++) {
      this.cars[counter] = new Car({scene:this,x:1880,y:carProperties[counter]}).setScale(2)
    }
  
    // the physics that detects if a car, and a frog collide
    this.physics.add.collider(this.frog, this.cars, function(frogCollide, carsCollide) {
    // if the frog and a car collide, the frog gets destroyed
    this.frog.destroy()
    // if the frog is destroyed this if statement becomes true
    if (!this.frog.destroy()) {
      // the game scene audio stops playing
      this.sound.stopAll()
      // the destruction audio when the frog dies playes
      this.sound.play('Destruction')
      // the scene switches to the end scene
      this.scene.switch('endScene')
    }
  }.bind(this))
  }

  update(time, delta) {

    // this lets the W key have a value
    let keyW

    // this lets the A key have a value
    let keyA

    // this lets the S key have a value
    let keyS

    // this lets the D key have a value
    let keyD

    // this allows the W input
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)

    // this allows the A input
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)

    // this allows the S input
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)

    // this allows the D input
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

    // if the W key is down, you move up
    if (keyW.isDown) {
      this.frog.frogUp()
      // console.log("Up")

    // if the A key is down, you move left
    } else if (keyA.isDown){
        this.frog.frogLeft()
      // console.log("Left")

    // if the S key is down, you move down
    } else if(keyS.isDown) {
        this.frog.frogDown()
      // console.log("Down")

    // if the D key is down, you move right
    } else if(keyD.isDown) {
        this.frog.frogRight()
        //console.log("Right")
    }

    // if the frog is at the end
    // the scene switches to the 
    // win scene
    if (this.frog.y < 60) {
      this.sound.stopAll()
      this.scene.switch('winScene')
    }

    // the car movement is updating
    // for all of the cars in the scene
    for (let counter = 0; counter < this.cars.length; counter++) {
      this.cars[counter].update()
    }
  }
}

// this exports the game scene
export default GameScene

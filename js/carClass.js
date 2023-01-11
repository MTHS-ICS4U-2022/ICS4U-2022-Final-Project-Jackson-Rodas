/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Frog class

export default class Car extends Phaser.GameObjects.Sprite {
  constructor (config) {
     super(config.scene,config.x,config.y, "car")
     config.scene.add.existing(this)

    // Random Speed
    this.speed = Phaser.Math.Between(10, 20)
    }


  carSpeed() {
    console.log(this.speed)
  }

  carLeft() {
    if (this.x < 60) {
      this.x = 1920
    }
    this.x -= this.speed
  }

  create(data) {
   // the frog with physics
   //this.frog = this.physics.add.sprite(1920 / 2, 1080 - 50, 'frog').setScale(0.25)
  }
  update(time, delta) {
    this.x -= this.speed;
    if (this.x < 60) {
      this.x = 1920;
    }
    
  }

    // https://stackoverflow.com/questions/58383619/how-to-use-a-s-d-w-keys-in-phaser 
  
    // https://phaser.io/examples/v2/input/keyboard <-- use this link for keyboard input 
}       

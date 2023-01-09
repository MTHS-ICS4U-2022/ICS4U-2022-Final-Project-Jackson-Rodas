/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Frog class

export default class Frog extends Phaser.GameObjects.Sprite {
  constructor (config) {
     super(config.scene,config.x,config.y, "frog")
     config.scene.add.existing(this)
    
    this.speed = 10
    }

  frogMinimum() {
    if (this.y = 60) {
    }
  }
  
  frogUp() {
    if (this.y < 50) {
      this.y = 50
    }
    this.y -= this.speed
  }

  frogDown() {
    if (this.y > 1030)
      this.y = 1030
    this.y += this.speed
  }

  frogLeft() {
    if (this.x < 60) {
      this.x = 60
    }
    this.x -= this.speed
  }

  frogRight() {
    if (this.x > 1860) {
      this.x = 1860
    }
    this.x += this.speed
  }
  
  create(data) {
   // the frog with physics
   //this.frog = this.physics.add.sprite(1920 / 2, 1080 - 50, 'frog').setScale(0.25)
    // this.cursors = this.input.keyboard.createCursorKeys()
  }
  update(time, delta) {
    }

    // https://stackoverflow.com/questions/58383619/how-to-use-a-s-d-w-keys-in-phaser 
  
    // https://phaser.io/examples/v2/input/keyboard <-- use this link for keyboard input 
}       

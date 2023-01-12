/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Frog class

// import { gameScene } from "./game"

export default class Frog extends Phaser.GameObjects.Sprite {
  constructor (config) {
     super(config.scene,config.x,config.y, "frog")
     // https://www.html5gamedevs.com/topic/37607-add-matter-physics-body-to-gameobjectssprite/
     config.scene.physics.world.enable(this)
     config.scene.add.existing(this)
    this.speed = 10
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

  // https://stackoverflow.com/questions/58383619/how-to-use-a-s-d-w-keys-in-phaser 
}       

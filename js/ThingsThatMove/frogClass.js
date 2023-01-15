/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Frog class

export default class Frog extends Phaser.GameObjects.Sprite {
  constructor (config) {

    // this supers all the needed information, the scene, the x, the y, the image, and data
    super(config.scene,config.x,config.y, "frog")
    
    // this is a reference we used to find the physics
    // https://www.html5gamedevs.com/topic/37607-add-matter-physics-body-to-gameobjectssprite/
    // this enables physics for the frog
    config.scene.physics.world.enable(this)

    // this adds the image to the scene
    config.scene.add.existing(this)

    // Speed for the frog
    // original speed is 10
    // speed for testing is 100
    this.speed = 80
  }
  
  frogUp() {

    // this adds the maximum movement for the frog going up
    if (this.y < 50) {
      this.y = 50
    }

    // this adds the speed in the up direction
    this.y -= this.speed
  }

  frogDown() {

    // this adds the minimum movement for the frog going down
    if (this.y > 1030)
      this.y = 1030

    // this adds the speed in the down direction
    this.y += this.speed
  }

  frogLeft() {
  
    // this adds the minimum movement for the frog going left
    if (this.x < 60) {
      this.x = 60
    }
  
    // this adds the speed in the left direction
    this.x -= this.speed
  }

  frogRight() {
  
    // this adds the maximum movement for the frog going right
    if (this.x > 1860) {
      this.x = 1860
    }
    
    // this adds the speed in the right direction
    this.x += this.speed
  } 
}       

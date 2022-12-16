/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Frog class

class Frog extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y) {
     super(scene, 1920 / 2, 1080 - 50, 'frog')
    
  }

   preload () {
     console.log('Frog Sprite')
   // images
  
   // the playable frog charactor
     this.frogImage = this.add.sprite('frog', 'assets/frog.png')
 }

  create(data) {
   // the frog with physics
   this.frog = this.physics.add.sprite(1920 / 2, 1080 - 50, 'frog').setScale(0.25)
  }
  update(time, delta) {
     /* hidden() {
    // frog.update()
    // fps is in 60 times a second
    // const keyUpObj = this.input.keyboard.addKey('UP')
    // if (keyUpObj.isDown === true) {
    //  this.frog.y -= 80
    //  if (this.frog.y < 40)
    //    this.frog.y = 40
    // }
    // const keyDownObj = this.input.keyboard.addKey('DOWN')
    // if (keyDownObj.isDown === true) {
    //  this.frog.y += 80
    //  if (this.frog.y > 1040)
    //    this.frog.y = 1040
    // }
    // const keyLeftObj = this.input.keyboard.addKey('LEFT')
    //  if (keyLeftObj.isDown === true) {
    //  this.frog.x -= 80
    //   if (this.frog.x < 40)
    //    this.frog.x = 40
    // }
    // const keyRightObj = this.input.keyboard.addKey('RIGHT')
    //  if (keyRightObj.isDown === true) {
    //  this.frog.x += 80
    //  if (this.frog.x > 1880)
    //    this.frog.x = 1880
    // }\
  } */  
  }

}                                                

export default Frog

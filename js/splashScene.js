/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Splash scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({key: 'splashScene'})
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

 preload () {
   console.log('Splash Scene')
   this.load.image('splashSceneBackground', 'assets/splashSceneImage.png')
 }

  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  update(time, delta) {
    if (time > 3000) {
    this.scene.switch('titleScene')
    }
  }
}

export default SplashScene
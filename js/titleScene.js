/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Title scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({key: 'titleScene'})

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

 preload () {
   console.log('Title Scene')
   this.load.image('titleSceneBackground', 'assets/aliens_screen_image.jpg')
 }

  create(data) {
    // set scale multiplies the image size by 2.75
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground').setScale(2.75)
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2

    this.titleSceneText = this.add.text(1920 / 2, (1080 /2) + 350, 'Frogger', this.titleSceneTextStyle).setOrigin(0.5)
  }

  update(time, delta) {
   if (time > 6000) {
    this.scene.switch('menuScene')
    }
  }
}

export default TitleScene
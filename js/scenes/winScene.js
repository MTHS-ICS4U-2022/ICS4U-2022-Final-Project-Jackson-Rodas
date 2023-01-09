/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Splash scene

class WinScene extends Phaser.Scene {
  constructor () {
    super({key: 'winScene'})

    this.youWinSceneBackgroundImage = null
  }

  init (data) {
    // the set colour of the background
    this.cameras.main.setBackgroundColor('#ffffff')
  }

 preload () {
   // writes the splash scene in the console
   console.log('Win Scene')
   // the splash scene background image
   this.load.image('youWinSceneBackground', './assets/YouWin.png')
 }

  create(data) {
    // gets the image sprite
    this.youWinSceneBackgroundImage = this.add.sprite(0, 0, 'youWinSceneBackground').setScale(8)

    // centers the sprite in the x coordanite
    this.youWinSceneBackgroundImage.x = 1920 / 2

    // centers the sprite in the y coordanite
    this.youWinSceneBackgroundImage.y = 1080 / 2
  }

  update(time, delta) {
    // the time so it stays up for 3 seconds in miliseconds
    // and within the if is when it switchs from the splash
    // scene to the title scene with the prompt
    // if (time > 3000) {
    // this.scene.switch('titleScene')
    }
  }

export default WinScene

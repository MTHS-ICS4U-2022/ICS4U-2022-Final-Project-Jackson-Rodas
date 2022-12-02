/* global Phaser */

// Copyright (c) 2022 Jackson Naufal and Rodas Nega All rights reserved
//
// Created by: Jackson Naufal and Rodas Nega
// Created On: December 2nd 2022
// This is the Title scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({key: 'titleScene'})
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

 preload () {
   console.log('Title Scene')
 }

  create(data) {
    
  }

  update(time, delta) {
    
  }
}

export default TitleScene
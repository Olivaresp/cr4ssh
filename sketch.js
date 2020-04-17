function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(13)
}

function draw() {
  let centerX = random(windowWidth)
  let centerY = random(windowHeight)

  let randomWidth1 = random(windowHeight / 4)
  let randomWidth2 = random(windowHeight / 6)

  let randomColor1 = random(177, 207)
  let randomColor2 = random(177, 207)


  background(25, 25, 25)

  fill(255, randomColor1, randomColor1)
  stroke(255, randomColor1, randomColor1)

  // 2
  triangle(0, randomWidth2, centerX, centerY, 0, centerY - randomWidth1)
  triangle(centerX, centerY, windowWidth, centerY + randomWidth1, windowWidth, windowHeight - randomWidth2)

  // 9
  triangle(centerX + randomWidth1, windowHeight, centerX, centerY, windowWidth - randomWidth2, windowHeight)
  triangle(randomWidth2, 0, centerX, centerY, centerX - randomWidth1, 0)


  noFill()
  noStroke()

  // 1
  triangle(0, 0, centerX, centerY, 0, randomWidth2)
  triangle(centerX, centerY, windowWidth, windowHeight - randomWidth2, windowWidth, windowHeight)

  // 3
  triangle(0, centerY - randomWidth1, centerX, centerY, 0, centerY + randomWidth1)
  triangle(centerX, centerY, windowWidth, centerY - randomWidth1, windowWidth, centerY + randomWidth1)

  // 5
  triangle(0, centerY + randomWidth1, centerX, centerY, 0, windowHeight)
  triangle(centerX, centerY, windowWidth, 0, windowWidth, centerY - randomWidth1)

  // 6
  triangle(0, windowHeight, centerX, centerY, randomWidth2, windowHeight)
  triangle(windowWidth - randomWidth2, 0, centerX, centerY, windowWidth, 0)

  // 8
  triangle(centerX - randomWidth1, 0, centerX, centerY, centerX + randomWidth1, 0)
  triangle(centerX - randomWidth1, windowHeight, centerX, centerY, centerX + randomWidth1, windowHeight)

  // 10
  triangle(windowWidth - randomWidth2, windowHeight, centerX, centerY, windowWidth, windowHeight)
  triangle(randomWidth2, 0, centerX, centerY, 0, 0)


  fill(255, randomColor2, randomColor2)
  stroke(255, randomColor2, randomColor2)

  // 4
  triangle(0, centerY + randomWidth1, centerX, centerY, 0, windowHeight - randomWidth2)
  triangle(centerX, centerY, windowWidth, randomWidth2, windowWidth, centerY - randomWidth1)

  // 7
  triangle(centerX + randomWidth1, 0, centerX, centerY, windowWidth - randomWidth2, 0)
  triangle(randomWidth2, windowHeight, centerX, centerY, centerX - randomWidth1, windowHeight)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function mousePressed() {
  noLoop()
}

function mouseReleased() {
  loop()
}

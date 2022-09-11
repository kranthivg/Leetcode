var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let left = 0
    let right = image[i].length - 1
    while (left <= right) {
      if (image[i][left] === image[i][right]) {
        image[i][left] ^= 1
        image[i][right] = image[i][left]
      }
      left += 1
      right -= 1
    }
  }
  return image
}

class ImageLoader {
  constructor() {
    this.listPaths = []
    this.listImages = []
    this.callBack = null
    this.loadedImageCount = 0
  }

  add(pathImage) {
    this.listPaths.push(pathImage)
  }

  getTotalImages() {
    return this.listPaths.length
  }

  getTotalImagesLoaded() {
    return this.loadedImageCount
  }

  getListImages() {
    return this.listImages
  }

  start(callBack) {
    this.callBack = callBack
    this.listPaths.forEach((path, i) => {
      let img = new Image()
      img.onload = this.imageLoaded.bind(this)
      img.src = path
      this.listImages[path] = img
    })
  }

  imageLoaded(e) {
    console.log("image chargée", e.target.currentSrc)
    this.loadedImageCount++
    if (this.loadedImageCount === this.getTotalImages()) {
      console.log("tout a été chargé !")
      this.callBack()
    }
  }
}

export default ImageLoader

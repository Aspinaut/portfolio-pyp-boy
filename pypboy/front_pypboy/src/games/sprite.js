class Sprite {
    constructor(pImg, pX = 0, pY = 0) {
        this.img = pImg;
        this.x = pX;
        this.y = pY;
    }

    draw(pCtx) {
        pCtx.drawImage(this.img, this.x, this.y);
    }
}

export default Sprite

class CanvasHandler {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  updateX(value) {
    const copy = this.x;
    this.x += value;
    return copy;
  }

  updateY(value) {
    const copy = this.y;
    this.y += value;
    return copy;
  }
}

export default CanvasHandler;

function Gestures() {
  this.tap = () => {};
  this.hold = () => {};
  this.swipe = (where) => {
    console.log("Gestures swipe");
    where.handle("swipe");
  };
}

function Mouse() {
  this.leftClick = () => {};
  this.doubleLeftClick = () => {};
  this.wheel = () => {};
  this.scroll = (where) => {
    console.log("Mouse scroll");
    where.handle("scroll");
  };
}

function Screen() {
  this.drag = () => {
    console.log("Screen drag");
  };
  this.move = () => {
    console.log("Screen move");
  };
  this.zoom = () => {
    console.log("Screen zoom");
  };
}
Screen.prototype.handle = function (...args) {
  const [action, ...params] = args;
  if (action === "swipe" || action === "scroll") {
    this.move(params);
  }
};

function ScreenBridge() {}
ScreenBridge.prototype.handle = function (...args) {
  const [action, ...params] = args;
  if (action === "swipe" || action === "scroll") {
    this.move(params);
  }
};

function run() {
  const phoneInteractions = new Gestures();
  const pcInteractions = new Mouse();

  const screen = new Screen();

  console.log('\nphoneInteractions =>>')
  phoneInteractions.swipe(screen);
  console.log('\npcInteractions =>>')
  pcInteractions.scroll(screen);
}

module.exports = {
  run,
};

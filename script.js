function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += 50;
    // console.log('ok 1: ' + this.left);
  }
  this.moveLeft = function () {
    this.left -= 50;
    // console.log('ok 2: ' + this.left);
  }
  this.moveDown = function () {
    this.top += 50;
    // console.log('ok 3: ' + this.top);
  }
  this.moveTop = function () {
    this.top -= 50;
    // console.log('ok 4: ' + this.top);
  }

}

var hero = new Hero('conan.png', 20, 30, 200);

function start() {

  if (hero.left < window.innerWidth - hero.size && hero.top === 20) {
    hero.moveRight();
  } 
  else if (hero.left === 1330 && hero.top < window.innerHeight - hero.size) {
    hero.moveDown();
  } 
  else if (hero.top === 570 && hero.top > window.innerHeight - hero.size) {
    // console.log('hero top '+hero.top + ', window ' + window.innerHeight + ', size ' + hero.size + ', tổng = ' + (window.innerHeight - hero.size))
    hero.moveLeft();
  }
  if (hero.left=== -20) {
    hero.moveTop();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();
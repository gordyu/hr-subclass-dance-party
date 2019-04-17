var makeAndrewDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  this.dx = 5;
  this.dy = 5;
  this._timeBetweenSteps = 10;
  this.color = 'white';

};

makeAndrewDancer.prototype = Object.create(makeDancer.prototype);
makeAndrewDancer.prototype.constructor = makeAndrewDancer;

makeAndrewDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.css({left: '+=' + this.dx + 'px'});
  this.$node.css({top: '+=' + this.dy + 'px'});

  var x = this.$node.css('left').replace('px', '');
  var y = this.$node.css('top').replace('px', '');

  if (x > $('body').width() - 25 || x < 5) {
    this.dx = -this.dx;
  }
  if (y > $('body').height() - 25 || y < 35) {
    this.dy = -this.dy;
  }

};

// var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

// blinkyDancer.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
// blinkyDancer.$node.toggle();
// };

//return blinkyDancer;
var makegordonDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.dx = Math.random() * 5;
  this._timeBetweenSteps = 5;
  this.color = 'yellow';
  this.$node.css({'border-radius': 0 + 'px'});
  this.$node.css({'height': '30px', 'width': '30px'});
};

makegordonDancer.prototype = Object.create(makeDancer.prototype);
makegordonDancer.prototype.constructor = makegordonDancer;
makegordonDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);

  this.$node.css({left: '+=' + this.dx + 'px'});

  var x = this.$node.css('left').replace('px', '');
  if (x > $('body').width() - 30 || x < 10) {
    this.dx = -this.dx;
  }
};
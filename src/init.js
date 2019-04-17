$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(dancerMakerFunction);

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });

  $('.lineUpButton').on('click', function(event) {
    var height = $('body').height() / 2;
    var width = 30;

    for (var dancer of window.dancers) {
      dancer.lineUp(height, width);
      width += 100;
    }
  });

  $('body').on('mouseenter', '.dancer', function() {

    //$(this).toggleClass('enlarge');
    $(this).toggle({width: '60px', height: '60px'});
  });
});

// effect:"scale",percent:"100%"

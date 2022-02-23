$(document).ready(function () {
    $(".dws-progress-bar").circularProgress({
        color: "#F1D00A",
        line_width: 17,
        height: "350px",
        width: "350px",
        percent: 0,
        starting_position: 0
    }).circularProgress('animate', 100, 2000);
});

$(window).on('load', function () {
   var $preloader = $('#preloader');
   $preloader.delay(2000).fadeOut('slow');
});


function soundClick() {
  var audio = new Audio();
  audio.src = 'audio/click.mp3';
  audio.autoplay = true;
}

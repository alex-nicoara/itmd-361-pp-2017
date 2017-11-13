$.noConflict();

// Re-introduce the dollar sign scope to self executing function
(function($) {
  // Variables
  var doorbellSound = new Audio('media/doorbell.mp3');
  var auplayer = document.getElementById("doorbell-auplayer");
  var message = document.getElementById("status");
  var doorbell;

  // Actions
  $('html').removeClass('no-js').addClass('js');
  $('#doorbell').removeClass('hide');
  $('#status-message').removeClass('hide');
  $('#doorbell-auplayer').addClass('hide');

  

})(jQuery);

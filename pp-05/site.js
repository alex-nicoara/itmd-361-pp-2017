$.noConflict();

// Re-introduce the dollar sign scope to self executing function
(function($) {
  // Variables
  var doorbellSound = new Audio('media/doorbell.mp3');
  var message = document.getElementById("status");
  var doorbell;

  // Actions
  $('html').removeClass('no-js').addClass('js');
  $('#doorbell').removeClass('hide');
  $('#status-message').removeClass('hide');
  $('#doorbell-auplayer').addClass('hide');

  $('#doorbell').remove();
  $('main').append('<button id="doorbell" name="button">Doorbell</button>');
  doorbell = document.getElementById("doorbell");

  // Functions
  function playDoorbell(e) {
    if(e.type === "click" || e.keyCode === 68) {
      message.innerHTML = "Ringing!";
      doorbellSound.play();
      console.log("Doorbell ringing...");
    }

    return;
  }

  function resetBell() {
    doorbellSound.currentTime = 0;
    message.innerHTML = "Not ringing.";
    return;
  }

  // Event Listeners
  doorbell.addEventListener("click", playDoorbell);
  window.addEventListener("keydown", playDoorbell);
  doorbellSound.addEventListener("ended", resetBell);

})(jQuery);

$(function(){
  $('#displayPhone').on('click', function(){
    $(this).replaceWith('3015692996');
  });

  easyZoom();
})

function easyZoom(){
  var $easyzoom = $('.easyzoom').easyZoom();
  // Get an instance API
  var api = $easyzoom.data('easyZoom');
  // Setup thumbnails example
  var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');
  $('.thumbnails').on('click', 'a', function(e) {
    var $this = $(this);
    e.preventDefault();
    // Use EasyZoom's `swap` method
    api1.swap($this.data('standard'), $this.attr('href'));
  });
}